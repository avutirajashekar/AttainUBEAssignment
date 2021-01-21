var express = require('express');
var router = express.Router();
var UserService = require("./../services/UserService");
const authService = require('./../utils/AuthenticateUtils');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', UserService.loginService);
router.post('/getuser', authService.userAuthentication, UserService.getUsersService);
router.get('/getimgthumb', authService.userAuthentication, UserService.getImageThumbnail);
router.post('/adduseraddress', authService.userAuthentication, UserService.addUserAddress);
module.exports = router;
