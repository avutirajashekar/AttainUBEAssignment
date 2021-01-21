/*jshint esversion: 8 */
const mysqlMainDB = require("./../db/mysqlMainDB");
module.exports = {
    insertUserAddress: function (fullName, address, country, state, city, pincode) {
        return new Promise(resolve => {
            try {
                var queryString = "INSERT INTO user_address (full_name, address, country, state, city, pincode, created_date, status) VALUES(?,?,?,?,?,?,UNIX_TIMESTAMP(),?);";
                var params = [fullName, address, country, state, city, pincode, 1];
                mysqlMainDB.execSqlQry(queryString, params)
                    .then(Resp => {
                        if (Resp != undefined) {
                            return resolve(1);
                        } else {
                            return resolve(0);
                        }
                    })
                    .catch(Err => {
                        console.error("Err at mysql insert insertUserAddress() in UserDao.js :: ", Err);
                        return resolve(0);
                    });
            } catch (error) {
                console.error("Err at insertUserAddress() in UserDao.js :: ", error);
                return resolve(0);
            }
        });
    }
}