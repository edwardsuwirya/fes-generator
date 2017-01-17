'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.green('BTPN FES Class') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'className',
      message: 'Nama Class nya, brad..?',
      default: 'MyClass'
    }, {
      type: 'input',
      name: 'classPath',
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
      var className = _.startCase(this.props.className).split(' ').join('');
      var classPath = this.props.classPath;

      var classFileName = _.kebabCase(className);
      var normalPath = path.join(this.config.get('sourceDir'), classPath);

      this.fs.copyTpl(
        this.templatePath('__name__.ts'),
        this.destinationPath(path.join(normalPath, classFileName + '.ts')), {
          className: className
        }
      );
    } catch (err) {
      this.env.error("Ada kesalahan coy..." + err);
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
