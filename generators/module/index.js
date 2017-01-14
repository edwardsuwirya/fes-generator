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
      chalk.red('BTPN Fes Module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'Nama Module nya, De..?',
      default: 'MyModule'
    }, {
      type: 'input',
      name: 'modulePath',
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
      var moduleName = _.startCase(this.props.moduleName).split(' ').join('');
      var modulePath = this.props.modulePath;

      var moduleFileName = _.kebabCase(moduleName);

      var normalPath = path.join(this.config.get('sourceDir'), modulePath, moduleFileName);
      this.fs.copyTpl(
        this.templatePath('__name__.module.ts'),
        this.destinationPath(path.join(normalPath, moduleFileName + '.module.ts')), {
          moduleName: moduleName
        }
      );
    }catch (err){
      this.env.error("Ada kesalahan coy..."+err);
    }
  },

  install: function () {
  }
});
