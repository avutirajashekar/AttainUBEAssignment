/*jshint esversion: 8 */
const config = require('config');
const JWT = require('jsonwebtoken');

var AuthenticateUtils = module.exports;

AuthenticateUtils.userAuthentication = function (apiRequest, apiResponse, nextService) {
    // check header or url parameters or post parameters for token
    var authToken = apiRequest.headers['authorization'];
    console.log("authToken : ", authToken);
    // decode token
    if (authToken) {
        // verifies secret and checks exp
        JWT.verify(authToken, config.jwtsecret, function (tokenVerifyError, tokenData) {
            if (tokenVerifyError) {
                apiResponse.status(401);
                apiResponse.send(tokenVerifyError);
            } else {
                // console.log("tokenData : ", tokenData);
                nextService();
            }
        });
    } else {
        apiResponse.status(401);
        apiResponse.send({"message":"Authentication token not found in request."});
    }
};