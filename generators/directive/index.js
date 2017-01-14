'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.red('BTPN FES Directive') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'directiveName',
      message: 'Nama Directive nya, Cing..?',
      default: 'MyDirective'
    }, {
      type: 'input',
      name: 'directivePath',
      message: 'Dibikin dimana nih (relatif ke src/app/ yak path-nya) ??',
      default: ''
    }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var directiveName = this.props.directiveName;
    var directivePath = this.props.directivePath;

    var normalPath = path.join(this.config.get('sourceDir'), directivePath)
    this.fs.copyTpl(
      this.templatePath('__name__.directive.ts'),
      this.destinationPath(path.join(normalPath, directiveName + '.component.ts')), {
        directiveName: directiveName
      }
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
