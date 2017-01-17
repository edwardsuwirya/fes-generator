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
      set('-e');
      searchPath = path.join(rootDir, searchDir);
      try {
        cd(searchPath);
        ls('*.module.ts').forEach(function (file) {
          if (file) {
            obs.next(file);
          }
        })
      } catch (err) {
        cd(rootDir);
        ls('*.module.ts').forEach(function (file) {
          obs.next(file);
        });
      }


    });
  },
  readFile: function (rootDir, searchDir, fileName) {
    return Observable.create(function (obs) {
      fs.readFile(path.join(rootDir, searchDir, fileName), 'utf8', function (err, data) {
        if (err) {
          fs.readFile(path.join(rootDir, fileName), 'utf8', function (err, data) {
            var stringData = data;
            obs.next({path: path.join(rootDir, fileName), content: stringData});
          });
        } else {
          var stringData = data;
          obs.next({path: path.join(rootDir, searchDir, fileName), content: stringData});
        }
      });
    });

  },
  init: function (scriptData, componentName, componentPath) {
    this.result = scriptData;
    this.componentName = componentName;
    var cp = _.remove(componentPath.split('/'), function (n) {
      return n.length >= 1;
    });
    this.componentPath = _.join(cp, '/');
    return this;
  },
  importInjector: function () {
    var startMatch2 = /preserve:end/.exec(this.result);
    var startIndex2 = startMatch2.index - 12;

    this.result = [
      [this.result.substr(0, startIndex2),
        'import { ' + this.componentName + ' } from \'' + this.componentPath + '\';'].join(''),
      this.result.substr(startIndex2, this.result.length)
    ].join('\n');

    return this;
  },

  bracketInjector: function () {
    var startMatch = /start_declarations/.exec(this.result);
    var endMatch = /end_declarations/.exec(this.result);

    var startIndex = startMatch.index + 18;
    var endIndex = endMatch.index - 2;
    this.result = [
      [this.result.substr(0, startIndex),
        this.componentName + ',' + this.result.substr(startIndex, endIndex - startIndex)].join('\n'),
      this.result.substr(endMatch.index - 2, this.result.length)].join('');
    return this;
  },
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
  },

  beautiful: function () {
    this.result = beautify(this.result, {ident_size: 2});
    return this;
  },

  writeFile: function (filePath) {
    fs.writeFile(filePath, this.result, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

}
