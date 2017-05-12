var express = require('express');
var router = express.Router();
var https = require('https');
var config = require('../config/liconfig');
var token = null;


router.get('/getLICode', function(req, res){

   const uri = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+ config.client_id + "&redirect_uri="+ config.redirect_uri + "&state=987654321&scope="+ config.scope +"";

   res.redirect(uri);



});
module.exports = router;
