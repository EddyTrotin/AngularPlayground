var express = require('express');
var router = express.Router();
var graph = require('fbgraph');
var http = require('http');

// this should really be in a config file!
var conf = {
    client_id:      '320802311671510',
    client_secret:  '72e1096cd5b8380a83db8c74db879857',
    scope:          'email, user_about_me, user_birthday, user_location',
    redirect_uri:   'http://localhost:3000/'
};


router.get('/auth/facebook', function(req, res) {

  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    var authUrl = graph.getOauthUrl({
        "client_id":     conf.client_id,
        "redirect_uri":  conf.redirect_uri,
        "scope":         conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
    return;
  }

  // code is set
  // we'll send that and get the access token
  graph.authorize({
      "client_id":      conf.client_id,
      "redirect_uri":   conf.redirect_uri,
      "client_secret":  conf.client_secret,
      "code":           req.query.code
  }, function (err, facebookRes) {
    res.redirect('/UserHasLoggedIn');
  });


});


// user gets sent here after being authorized
router.get('/UserHasLoggedIn', function(req, res) {
  res.render("index", { title: "Logged In" });
});















// Test
router.get('/rainbow', (req, res, next) => {
   // data = https.get('http://graph.facebook.com/facebook/picture?redirect=false');
   // res = data;
   //search?q=david&type=user&center=37.76,-122.427&distance=1000
   graph.setAccessToken("EAACEdEose0cBANFRBzDFBEpozFyFxUwwD51dcw0MRnPl5uA9iEWJ9YhZCJuQFe7HqljoEvuVg6lA9zKQZAqJ9U2fPFk6my4kVOxXXEnj6qHoMwSFeMZCldXzM1gZAHAKto21mKqxZAqj0eosmCGZBxA5S4z4RVFxSvXnAqjPF7y0xGSf3BS1nmxcDddTAhfbs864Oi7yH00wZDZD"); // get it via https://developers.facebook.com/tools/explorer/ for now

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
