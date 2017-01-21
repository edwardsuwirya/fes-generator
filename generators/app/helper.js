/**
 * Created by 15050978 on 1/15/2017.
 */
var fs = require('fs');
var path = require('path');
var us = require("underscore.string");
var Observable = require('rxjs/Observable').Observable;
var _ = require('lodash');
require('shelljs/global');
var beautify = require('js-beautify').js_beautify;


module.exports = {
  result: '',
  componentName: '',
  componentPath: '',

  findFile: function (rootDir, searchDir) {
    return Observable.create(function (obs) {
      searchPath = path.join(rootDir, searchDir);
      var sp = searchPath.split(path.sep);

      for (var i = 0; i < sp.length; i++) {
        var r = _.take(sp, sp.length - i);
        var rr = (r.join(path.sep));
        var fileMod = _.takeRight(r);
        if (fs.existsSync(rr + path.sep + fileMod + '.module.ts')) {
          obs.next(rr + path.sep + fileMod + '.module.ts');
          break;
        }

      }
    })
  },
  readFile: function (fileName) {
    return Observable.create(function (obs) {
      fs.readFile(fileName, 'utf8', function (err, data) {
        var s = fileName.split(path.sep);
        var isRootMod = false;
        if (s[s.length - 1] === 'app.module.ts') {
          isRootMod = true;
        }
        fs.readFile(fileName, 'utf8', function (err, data) {
          var stringData = data;
          obs.next({path: fileName, content: stringData, isRootModule: isRootMod});
        });
      });
    });

  }
  ,
  init: function (scriptData, componentName, componentPath) {
    this.result = scriptData;
    this.componentName = componentName;
    var cp = _.remove(componentPath.split('/'), function (n) {
      return n.length >= 1;
    });
    this.componentPath = _.join(cp, '/');
    return this;
  }
  ,
  importInjector: function () {
    var startMatch2 = /preserve:end/.exec(this.result);
    var startIndex2 = startMatch2.index - 12;

    this.result = [
      [this.result.substr(0, startIndex2),
        'import { ' + this.componentName + ' } from \'' + this.componentPath + '\';'].join(''),
      this.result.substr(startIndex2, this.result.length)
    ].join('\n');

    return this;
  }
  ,

  bracketDeclarationInjector: function () {
    var startMatch = /start_declarations/.exec(this.result);
    var endMatch = /end_declarations/.exec(this.result);

    var startIndex = startMatch.index + 18;
    var endIndex = endMatch.index - 2;
    this.result = [
      [this.result.substr(0, startIndex),
        this.componentName + ',' + this.result.substr(startIndex, endIndex - startIndex)].join('\n'),
      this.result.substr(endMatch.index - 2, this.result.length)].join('');
    return this;
  }
  ,
  bracketProviderInjector: function () {
    var startMatch = /start_providers/.exec(this.result);
    var endMatch = /end_providers/.exec(this.result);

    var startIndex = startMatch.index + 15;
    var endIndex = endMatch.index - 2;
    this.result = [
      [this.result.substr(0, startIndex),
        this.componentName + ',' + this.result.substr(startIndex, endIndex - startIndex)].join('\n'),
      this.result.substr(endMatch.index - 2, this.result.length)].join('');
    return this;
  }
  ,
  bracketExportInjector: function () {
    var startMatch = /start_exports/.exec(this.result);
    var endMatch = /end_exports/.exec(this.result);

    var startIndex = startMatch.index + 13;
    var endIndex = endMatch.index - 2;
    this.result = [
      [this.result.substr(0, startIndex),
        this.componentName + ',' + this.result.substr(startIndex, endIndex - startIndex)].join('\n'),
      this.result.substr(endMatch.index - 2, this.result.length)].join('');
    return this;
  }
  ,
  beautiful: function () {
    this.result = beautify(this.result, {ident_size: 2});
    return this;
  }
  ,

  writeFile: function (filePath) {
    fs.writeFile(filePath, this.result, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

}
