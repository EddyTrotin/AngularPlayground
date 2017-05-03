var express = require('express');
var router = express.Router();
var graph = require('fbgraph');
var http = require('http');

// Test
router.get('/rainbow', (req, res, next) => {
   // data = https.get('http://graph.facebook.com/facebook/picture?redirect=false');
   // res = data;
   //search?q=david&type=user&center=37.76,-122.427&distance=1000
   graph.setAccessToken("access_token"); // get it via https://developers.facebook.com/tools/explorer/ for now

   // Options de base pour utiliser le sdk graph
   var options = {
       timeout:  3000,
       pool:     { maxSockets:  Infinity },
       headers:  { connection:  "keep-alive" }
   };

   // Fait une requête en get. Ici on passe en paramètre un simple ID (celui d'Henri Menard)
   graph
     .setOptions(options)
     .get("1214608344", function(err, res) {
       console.log(res);
     });


});


module.exports = router;
