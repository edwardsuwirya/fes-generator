'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var colors = require('colors');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.green('BTPN FES Generator Help')
    ));
  },

  writing: function () {
    console.log('Penggunaan:'.blue);
    console.log('yo btpn-fes:[subGenerator]');
    console.log('');
    console.log('Ketersediaan Sub Generator'.yellow);
    console.log('--------------------------')
    console.log('module');
    console.log('feat-module'.red);
    console.log('component');
    console.log('plain-service');
    console.log('http-service');
    console.log('directive');
    console.log('pipe');
    console.log('validator');
    console.log('');
    console.log('Contoh:');
    console.log('Untuk membuat component baru, jalankan perintah');
    console.log('   yo btpn-fes:component'.cyan);
    console.log('di dalam project working directory. Generator akan mencari angular module terdekat');
    console.log('dan berakhir di app.module apabila tidak menemukan module yang lain');
    console.log('');
  },

  install: function () {

  }
});
