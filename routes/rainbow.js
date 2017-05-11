var express = require('express');
var router = express.Router();
var FB = require('fb');
var https = require('https');
var config = require('../config');

var token = null;


router.get('/getFbCode', function(req, res){

   res.redirect(`https://www.facebook.com/v2.9/dialog/oauth?client_id=320802311671510&redirect_uri=http://localhost:3000/&scope=user_birthday,user_location`);

});


router.get('/setFbAccessToken/:code', function(req, response){

   console.log("Client id : " + config.client_id);
   const code = req.params.code;
   console.log("code : " + code);
   const uri = "https://graph.facebook.com/v2.9/oauth/access_token?client_id=320802311671510&redirect_uri=http://localhost:3000/&client_secret=72e1096cd5b8380a83db8c74db879857&code=" + code +"";



   https.get(uri, function(res){

      console.log("Got response: " + res.statusCode);


      res.on('data', function (body, res) {
         token = JSON.parse(body).access_token;
         console.log("Token on res :" + token);
         response.sendStatus(200);
      });

   });

});




router.get('/getFbInfos', function(req, response){

   console.log("Token on get infos : " + token);

   FB.setAccessToken(token);

   FB.api('me', { fields: ['id', 'name', 'birthday', 'location'] }, function (res) {
      if(!res || res.error) {
         console.log(!res ? 'error occurred' : res.error);
         return;
      }
      response.json(res);

   });


});







module.exports = router;
