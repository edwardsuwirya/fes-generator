'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');
var helper = require('../app/helper.js');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.red('BTPN FES HTTP Service') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'httpServiceName',
      message: 'Nama HTTP Service nya, Bang..?',
      default: 'HttpService'
    }, {
      type: 'input',
      name: 'httpServicePath',
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
      var serviceName = _.startCase(this.props.httpServiceName).split(' ').join('');
      var servicePath = this.props.httpServicePath;

      var serviceFileName = _.kebabCase(serviceName);

      var sc = this.config.get('sourceDir');
      var normalPath = path.join(sc, servicePath);

      this.fs.copyTpl(
        this.templatePath('__name__.service.ts'),
        this.destinationPath(path.join(normalPath, serviceFileName + '.service.ts')), {
          httpServiceName: serviceName
        }
      );
      helper.findFile(sc, servicePath).subscribe(function (file) {
        helper.readFile(file.moduleName).subscribe(function (a) {
          var res;
          if (a.isRootModule) {
            res = helper
              .init(a.content, serviceName + 'Service', _.join(['.', serviceFileName + '.service'], '/'))
              .importInjector()
              .bracketProviderInjector()
              .beautiful()
              .writeFile(file.moduleName);
          } else {
            res = helper
              .init(a.content, serviceName + 'Service', _.join(['.', file.componentFolder, serviceFileName + '.service'], '/'))
              .importInjector()
              .bracketProviderInjector()
              .beautiful()
              .writeFile(file.moduleName);
          }
          // console.log(res);
        });
      });
    } catch (err) {
      this.env.error("Ada yang salah bung...." + err);
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
