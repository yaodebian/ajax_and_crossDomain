window.onload = function () {
  var btn = document.getElementsByClassName('ajaxTip')[0].getElementsByTagName('p')[0];
  ////不跨域正常请求
  // btn.onclick = function() {
  //   ajax({
  //     method: 'get',
  //     url: 'http://localhost:8080/getMsg',
  //     data: {
  //       'name': 'yaodebian',
  //       'age': 100
  //     },
  //     success: function(text) {
  //       var resBox = document.getElementsByClassName('ajaxRes')[0];
  //       resBox.innerText = text;
  //     },
  //     async: true
  //   })
  // }

  ////ajax进行跨域请求，数据返回失败。。。
  // btn.onclick = function() {
  //   ajax({
  //     method: 'get',
  //     url: 'http://localhost:8081/getMsg',
  //     data: {
  //       'name': 'yaodebian',
  //       'age': 100
  //     },
  //     success: function(text) {
  //       var resBox = document.getElementsByClassName('ajaxRes')[0];
  //       resBox.innerText = text;
  //     },
  //     async: true
  //   })
  // }

  // //jsonP解决跨域
  // btn.onclick = function () {
  //   var url = 'http://localhost:8081/getMsg?func=showMsg';
  //   var script = document.createElement('script');
  //   script.setAttribute('src', url);
  //   script.setAttribute('type', 'text/javascript');
  //   document.body.appendChild(script, document.body.firstChild);
  // }

  // //jquery对jsonp的封装
  // $(btn).click(function() {
  //   $.ajax({
  //     async: true,
  //     url: 'http://localhost:8081/getMsg',
  //     type: 'GET',
  //     dataType: 'jsonp',//返回的数据类型，设置为JSONP方式
  //     jsonp: 'func',//指定一个查询参数名称来覆盖默认的jsonp回调参数
  //     jsonpCallback: 'showMsg',//设置回调函数名
  //     data: {
  //       name: 'yaode',
  //       age: '100'
  //     },
  //     success: function(res, status, xhr) {
  //       console.log('状态为：' + status + ',状态是：' + xhr.statusText);
  //       console.log(res);
  //     }
  //   })
  // })

  // //后台通过设置响应头来解决跨域
  // btn.onclick = function() {
  //   ajax({
  //     method: 'get',
  //     url: 'http://localhost:8081/getMsg',
  //     data: {
  //       'name': 'yaodebian',
  //       'age': 100
  //     },
  //     success: function(text) {
  //       var resBox = document.getElementsByClassName('ajaxRes')[0];
  //       resBox.innerText = text;
  //     },
  //     async: true
  //   })
  // }

  // //正向代理解决跨域
  // btn.onclick = function() {
  //   ajax({
  //     method: 'get',
  //     url: 'http://localhost:8080/getMsg',
  //     data: {
  //       'name': 'yaodebian',
  //       'age': 100
  //     },
  //     success: function(text) {
  //       var resBox = document.getElementsByClassName('ajaxRes')[0];
  //       resBox.innerText = text;
  //     },
  //     async: true
  //   })
  // }

}

// //jsonP解决跨域
// function showMsg(text) {
//   var resBox = document.getElementsByClassName('ajaxRes')[0];
//   resBox.innerText = text;
// }