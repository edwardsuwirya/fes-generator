'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Observable = require('rxjs/Observable').Observable;
var helper = require('../app/helper.js');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.red('BTPN FES Plain Service') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'plainServiceName',
      message: 'Nama Plain Service nya, Bang..?',
      default: 'PlainService'
    }, {
      type: 'input',
      name: 'plainServicePath',
      message: 'Dibikin dimana nih (relatif ke src/app/ yak path-nya) ??',
      default: ''
    }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    try {
      var serviceName = _.startCase(this.props.plainServiceName).split(' ').join('');
      var servicePath = this.props.plainServicePath;

      var serviceFileName = _.kebabCase(serviceName);

      var sc = this.config.get('sourceDir');
      var normalPath = path.join(sc, servicePath);

      this.fs.copyTpl(
        this.templatePath('__name__.service.ts'),
        this.destinationPath(path.join(normalPath, serviceFileName + '.service.ts')), {
          plainServiceName: serviceName
        }
      );
      helper.findFile(sc, servicePath).subscribe(function (file) {
        helper.readFile(sc, servicePath, file).subscribe(function (a) {
          var res = helper
            .init(a.content, serviceName + 'Service', _.join(['.', servicePath, serviceFileName + '.service'], '/'))
            .importInjector()
            .bracketProviderInjector()
            .beautiful()
            .writeFile(a.path, file);
          // console.log(a);
        });
      });
    } catch (err) {
      this.env.error("Ada yang salah bung....");
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
