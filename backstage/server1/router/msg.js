const express = require('express');
const body_parser = require('body-parser');
const request = require('request');

module.exports = function() {
  let router = express.Router();

  router.use(body_parser.urlencoded({
    extended: false,                 //扩展模式
    limit:    2*1024*1024           //限制-2M
  }));

  router.get('/', function(req, res) {
    // //不跨域请求方式
    // res.send('我喜欢你').end();

    // //正向代理请求方式
    // request('http://localhost:8081/getMsg', function(error, response, body) {
    //   if(!error && response.statusCode == 200) {
    //     res.send(body).end();
    //   }
    // })
  })

  return router;
}