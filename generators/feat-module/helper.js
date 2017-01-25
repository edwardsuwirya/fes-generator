/**
 * Created by 15050978 on 1/24/2017.
 */
var fs = require('fs');

module.exports = {
  getHtmlEleement: function (jsonData) {
    var s = jsonData.name;
    var t = jsonData.type;
    var o = jsonData.option;
    var result = '';

    if (t === 'text') {
      result = ('<div class=\'form-group\'>' +
      '<label for=\'' + s + '\'>' + s + '</label>' +
      '<input id=\'' + s + '\' type=\'' + t + '\' formControlName=\'' + s + '\' class=\'form-control\' placeholder=\'\'>' +
      '</div>');
    } else if (t === 'select') {
      var selOptions = [];
      for (var i = 0; i < o.length; i++) {
        selOptions.push('<option>' + o[i] + '</option>');
      }
      result = ('<div class=\'form-group\'>' +
      '<label for=\'' + s + '\'>' + s + '</label>' +
      '<select id=\'' + s + '\' formControlName=\'' + s + '\' class=\'form-control\'>' +
      selOptions.join('\n') +
      '</select>' +
      '</div>');
    } else if (t === 'option') {
      var opOptions = [];
      for (var i = 0; i < o.length; i++) {
        opOptions.push('<label class=\'checkbox-inline\'>' +
          '<input type=\'radio\' name=\'' + s + '\'  value=\'' + o[i] + '\'>' +
          o[i] +
          '</label>');
      }
      result = ('<div class=\'form-group\'>' +
        opOptions.join('\n') +
        '</div>'
      )
    } else if (t === 'check') {

    } else {
      result = ('<div>' +
      s + '</div>')
    }
    return result;
  }
};
