/*jshint esversion: 8 */
const mysql = require('mysql');
const config = require("config");

var conn;
var pool = mysql.createPool(config.mysqlMainDB);

module.exports = {
    createAndConnect: function (conCallback) {
        // console.log("conn : ", conn);
        if (conn != undefined & conn != null) {
            console.log('Mysql Main DB connected! already');
            conCallback();
        } else {
            pool.getConnection(function (err, connection) {
                conn = connection;
                console.log('Mysql Main DB connected!');
                conCallback();
            });
        }
    },
    getMySqlConn: function () {
        return new Promise((resolve, reject) => {
            if (conn) {
                return resolve(conn);
            } else {
                module.exports.createAndConnect(function () {
                    return resolve(conn);
                });
            }
            reject();
        });
    },
    execSqlQry: function (qry, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                connection.query(qry, params, (qryErr, queryResponse) => {
                    connection.release();
                    if (queryResponse) {
                        return resolve({
                            message: 'SUCCESS',
                            success: true,
                            data: queryResponse
                        });
                    } else {
                        reject({
                            message: qryErr,
                            success: false,
                            data: []
                        });
                    }
                });
            });

            // module.exports.getMySqlConn()
            //     .then(connection => {

            //     })
            //     .catch(err => {
            //         reject({
            //             message: err,
            //             success: false,
            //             data: []
            //         });
            //     });
        });
    },
    closeConn: function (closeCallB) {
        if (conn != undefined & conn != null) {
            // console.log("conn :: ", conn);
            conn.release();
            conn = null;
            // conn.release(function (err) {
            //     console.log("err :: ", err);
            //     if (err) {
            //         console.log('error at closeConn Main DB:' + err.message);
            //         closeCallB();
            //     } else {
            //         conn = null;
            console.log('Mysql Main DB closed.');
            closeCallB();
            //     }
            // });
        } else {
            console.log('Mysql Main DB not exists.');
            closeCallB();
        }
    }
};