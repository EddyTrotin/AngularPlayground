var express = require('express');
var router = express.Router();
var FB = require('fb');
var https = require('https');
var config = require('../config/fbconfig');
var token = null;


router.get('/getFbCode', function(req, res){

   res.redirect(`https://www.facebook.com/v2.9/dialog/oauth?client_id=`+ config.client_id + `&redirect_uri=` + config.redirect_uri + `&scope=`+ config.scope + ``);

});

// Call this when the code is in the URL (after code=)
router.get('/setFbAccessToken/:code', function(req, response){

   const code = req.params.code;

   const uri = "https://graph.facebook.com/v2.9/oauth/access_token?client_id="+
   config.client_id +"&redirect_uri="+ config.redirect_uri +"&client_secret="+ config.client_secret +"&code="+ code +"";

   https.get(uri, function(res){

      console.log("Got response: " + res.statusCode);

      res.on('data', function (body, res) {
         token = JSON.parse(body).access_token;
         response.sendStatus(200); // Send the confirmation so that the client know that the request is completed
      });

   });

});



// Get facebooks informations set in config
router.get('/getFbInfos', function(req, response){

   FB.setAccessToken(token);

   FB.api('me', { fields: config.fields }, function (res) {
      if(!res || res.error) {
         console.log(!res ? 'error occurred' : res.error);
         return;
      }

      response.json(res);

   });
});


module.exports = router;
