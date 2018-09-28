const express = require('express');
const body_parser = require('body-parser');

module.exports = function() {
  let router = express.Router();

  router.use(body_parser.urlencoded({
    extended: false,                 //扩展模式
    limit:    2*1024*1024           //限制-2M
  }));

  router.get('/', function(req, res) {
    ////正常跨域unable
    // res.send('我喜欢你').end();

    // //jsonp解决
    // let funcName = req.query.func;
    // res.send(`${funcName}('${'我喜欢你'}')`).end();

    ////设置响应头
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.send('我喜欢你').end();

    // //正向代理
    // res.send('我喜欢你').end();
  })

  return router;
}