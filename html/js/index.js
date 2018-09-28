window.onload = function() {
  var btn = document.getElementsByClassName('ajaxTip')[0].getElementsByTagName('p')[0];
  btn.onclick = function() {
    ajax({
      method: 'get',
      url: 'http://localhost:8080/getMsg',
      data: {
        'name': 'yaodebian',
        'age': 100
      },
      success: function(text) {
        var resBox = document.getElementsByClassName('ajaxRes')[0];
        resBox.innerText = text;
      },
      async: true
    })
  }
}