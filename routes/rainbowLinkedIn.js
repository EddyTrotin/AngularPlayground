var express = require('express');
var router = express.Router();
var https = require('https');
var config = require('../config/liconfig');
var request = require('request');
var token = null;

router.get('/getLiCode', function(req, res){

   token = null;
   const uri = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+
   config.client_id + "&redirect_uri="+ config.redirect_uri + "&state="+ config.state +"&scope="+ config.scope +"";

   res.redirect(uri);

});

router.get('/setLiAccessToken/:user_code', function(req, response){

   if(!token){
      const user_code = req.params.user_code;

      // Set the headers
      var headers = {
         'Content-Type':     'application/x-www-form-urlencoded'
      };
      // Configure the request
      var options = {
         url: 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+ user_code +'&redirect_uri='+ config.redirect_uri +
         '&client_id='+ config.client_id + '&client_secret='+ config.client_secret + '',
         method: 'POST',
         headers: headers,
      };
      // Start the request
      request(options, function (error, res, body) {
            token = JSON.parse(body).access_token;
            response.sendStatus(200);
      });
   }
   else{
      response.sendStatus(200);
   }
});

// Get Infos
router.get('/getLiInfos', function(req, response){

   if(token){

      const uri = "https://api.linkedin.com/v1/people/~:("+ config.fields + ")?oauth2_access_token=" + token + "&format=json";
      https.get(uri, function(res){
         res.on('data', function(body, res){
            response.send(body);
         });
      });
   }

});


module.exports = router;
