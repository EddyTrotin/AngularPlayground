var express = require('express');
var router = express.Router();
var https = require('https');
var config = require('../config/liconfig');
var linkedin = require('node-linkedin')(config.client_id, config.client_secret);
var request = require('request');
var token = null;

// Set the headers
var headers = {
   'Content-Type':     'application/x-www-form-urlencoded'
};



router.get('/getLiCode', function(req, res){

   const uri = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+
   config.client_id + "&redirect_uri="+ config.redirect_uri + "&state="+ config.state +"&scope="+ config.scope +"";

   console.log(uri);

   res.redirect(uri);


});


router.get('/setLiAccessToken/:code', function(req, response){

   if(!token){
      const code = req.params.code;
      // Configure the request
      var options = {
         url: 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+ code +'&redirect_uri=http://localhost:3000/&client_id=77k2mroh7b230y&client_secret=OUEd2HDTSBk45ZNg',
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


router.get('/getLiInfos', function(req, response){

   if(token){
      console.log("Token : " + token);

      const uri = "https://api.linkedin.com/v1/people/~:(formatted-name,industry,location,positions,email-address)?oauth2_access_token=" + token + "&format=json";
      https.get(uri, function(res){

         res.on('data', function(body, res){

            console.log("body : " + body);

            response.send(body);
         });

      });
   }


});


module.exports = router;
