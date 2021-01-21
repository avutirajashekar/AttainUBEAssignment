/*jshint esversion: 8 */
var jwt = require('jsonwebtoken');
const jsonpatch = require("jsonpatch");
const config = require('config');
const imageThumbnail = require('image-thumbnail');
const userDao = require("./../dao/UserDao");
var sercretKey = config.jwtsecret;
module.exports = {
    loginService: function (req, res) {
        try {
            if (req.body.username) {
                if (req.body.password) {
                    var token = jwt.sign({
                        username: userName
                    }, sercretKey);
                    res.send({
                        message: "Login success.",
                        "token": token
                    });
                } else {
                    res.send({
                        message: "Password is required. Please try again."
                    });
                }
            } else {
                res.send({
                    message: "Username is required. Please try again."
                });
            }
            var userName = req.body.username;
        } catch (error) {
            console.error("Error at loginService() in UserService.js : ", error);
        }
    },
    getUsersService: function (req, res) {
        try {
            var userObj = req.body ? req.body : {};
            var thepatch = [{
                "op": "replace",
                "path": "/user",
                "value": "Rajashekar"
            }]
            var newObj = jsonpatch.apply_patch(userObj, thepatch);
            res.send(newObj);
        } catch (error) {
            console.error("Error at loginService() in UserService.js : ", error);
        }
    },
    getImageThumbnail: async function (req, res) {
        try {
            let options = {
                width: 50,
                height: 50
            }
            const thumbnail = await imageThumbnail({
                uri: 'https://venturebeat.com/wp-content/uploads/2018/09/ironman.jpg'
            }, options);
            res.send(thumbnail);
        } catch (error) {
            console.error("Error at loginService() in UserService.js : ", error);
        }
    },
    addUserAddress: async function (req, res) {
        try {
            if (req.body.fullname) {
                if (req.body.address) {
                    if (req.body.country) {
                        if (req.body.state) {
                            if (req.body.city) {
                                if (req.body.pincode) {
                                    var fullName = req.body.fullname;
                                    var address = req.body.address;
                                    var country = req.body.country;
                                    var state = req.body.state;
                                    var city = req.body.city;
                                    var pincode = req.body.pincode;
                                    var isUserInsert = await userDao.insertUserAddress(fullName, address, country, state, city, pincode);
                                    if (isUserInsert == 1) {
                                        res.send({
                                            message: "User address successfully added."
                                        });
                                    } else {
                                        res.send({
                                            message: "We are failed to add user address. please try again."
                                        });
                                    }
                                } else {
                                    res.send({
                                        message: "Pincode is required. Please try again."
                                    });
                                }
                            } else {
                                res.send({
                                    message: "City is required. Please try again."
                                });
                            }
                        } else {
                            res.send({
                                message: "State is required. Please try again."
                            });
                        }
                    } else {
                        res.send({
                            message: "Country is required. Please try again."
                        });
                    }
                } else {
                    res.send({
                        message: "address is required. Please try again."
                    });
                }
            } else {
                res.send({
                    message: "Fullname is required. Please try again."
                });
            }
        } catch (error) {
            console.error("Error at addUserAddress() in UserService.js : ", error);
        }
    }
}