'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
require('shelljs/global');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.red('BTPN FES Component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'Nama Komponen nya, Om..?',
      default: 'MyComponent'
    }, {
      type: 'input',
      name: 'componentPath',
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
      var componentName = _.startCase(this.props.componentName).split(' ').join('');
      var componentPath = this.props.componentPath;

      var componentFileName = _.kebabCase(componentName);

      var normalPath = path.join(this.config.get('sourceDir'), componentPath, componentFileName);

      cd(path.join(this.config.get('sourceDir'), componentPath));
      ls('*.module.ts').forEach(function (file) {
        sed('-i', 'declarations(.*)', 'declarations$1 '+ componentName + 'Component,', file);
      });
      this.fs.copyTpl(
        this.templatePath('__name__.component.ts'),
        this.destinationPath(path.join(normalPath, componentFileName + '.component.ts')), {
          componentName: componentName,
          componentFileName:componentFileName
        }
      );
      this.fs.copyTpl(
        this.templatePath('__name__.component.html'),
        this.destinationPath(path.join(normalPath, componentFileName + '.component.html')), {}
      );

      this.fs.copyTpl(
        this.templatePath('__name__.component.css'),
        this.destinationPath(path.join(normalPath, componentFileName + '.component.css')), {}
      );
    }catch (err){
      this.env.error("Ada kesalahan coy...");
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
