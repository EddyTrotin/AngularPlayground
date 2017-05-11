var express = require('express');
var router = express.Router();
var FB = require('fb');
var https = require('https');
var url = require('url');

var token = null;

// // this should really be in a config file!
// var conf = {
//    client_id:      '320802311671510',
//    client_secret:  '72e1096cd5b8380a83db8c74db879857',
//    scope:          'email, user_about_me, user_birthday, user_location',
//    redirect_uri:   'http://localhost:3000/'
// };

router.get('/getFbCode', function(req, res){

   res.redirect(`https://www.facebook.com/v2.9/dialog/oauth?client_id=320802311671510&redirect_uri=http://localhost:3000/`);



});



router.get('/setFbAccessToken/:code', function(req, response){


   const code = req.params.code;
   console.log("code : " + code);
   const uri = "https://graph.facebook.com/v2.9/oauth/access_token?client_id=320802311671510&redirect_uri=http://localhost:3000/&client_secret=72e1096cd5b8380a83db8c74db879857&code=" + code +"";



   https.get(uri, function(res){

      console.log("Got response: " + res.statusCode);


      res.on('data', function (body, res) {
         token = JSON.parse(body).access_token;
         console.log("Token on res :" + token);

      });

   });

   response.sendStatus(200);

});




//
// passport.use(new FacebookStrategy({
//    clientID: '320802311671510',
//    clientSecret: '72e1096cd5b8380a83db8c74db879857',
//    callbackURL: "http://localhost:3000/"
// },
// function(accessToken, refreshToken, profile, cb) {
//    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//    });
// }
// ));
//
//
// router.get('/auth/facebook',
// passport.authenticate('facebook', { scope: ['user_location', 'user_birthday'] }));
//
// router.get('/auth/facebook/callback',
// passport.authenticate('facebook', { failureRedirect: '/login' }),
// function(req, res) {
//    // Successful authentication, redirect home.
//    console.log("lol1");
//    res.redirect('/');
// });
//
//
// FB.api('oauth/access_token', {
//    client_id: '320802311671510',
//    client_secret: '72e1096cd5b8380a83db8c74db879857',
//    redirect_uri: 'http://localhost:3000/',
//    code: 'AQC8YR2J598rff65PU8qdnvnR54aqoxKOu2gbYkmL-9f0sYqDJitmnjjLAAP86EKmQzoYprSgAjQx8BFq4iRBN9JyQaaj64WYcgx3BkPkFLywenS_dcxQ137IrbuDui1iBwkjQe1R8uj4x-lmQSQkMMCvUKsv6C-x2IitWqfuEBWH9prcjmyydtoD1mzIbgzKy4r12ua9GcYVr0-6ihPfAAISDdG7N8izem4fxf7EW12G302gBv1mp-j2LjWulnPV5Ftr07Dry3uwLw9TXY2YCmLGPv9Gy3x-8YXlFzaeo0-VH69WK6eY-9Bc7gcEtuvJJyb6n52wm3abq7miyMBcPFW#_=_'
// }, function (res) {
//    console.log("lol1");
//    if(!res || res.error) {
//       console.log(!res ? 'error occurred' : res.error);
//       return;
//    }
//
//    var accessToken = res.access_token;
//    console.log("token : " + accessToken);
//    var expires = res.expires ? res.expires : 0;
// });
//


//
// FB.api('me', { fields: ['id', 'name', 'birthday'] }, function (res) {
//   if(!res || res.error) {
//     console.log(!res ? 'error occurred' : res.error);
//     return;
//   }
//   console.log(res.id);
//   console.log(res.name);
//   console.log(res.birthday);
// });


module.exports = router;
