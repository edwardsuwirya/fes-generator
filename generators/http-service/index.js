'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

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

      var normalPath = path.join(this.config.get('sourceDir'), servicePath)
      this.fs.copyTpl(
        this.templatePath('__name__.service.ts'),
        this.destinationPath(path.join(normalPath, serviceFileName + '.service.ts')), {
          httpServiceName: serviceName
        }
      );
    } catch (err) {
      this.env.error("Ada yang salah bung....");
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
