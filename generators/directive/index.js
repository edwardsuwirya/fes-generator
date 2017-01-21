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
      chalk.yellow('BTPN FES Directive') + ' generator!'
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
    try {
      var directiveName = _.startCase(this.props.directiveName).split(' ').join('');
      var directivePath = this.props.directivePath;

      var directiveFileName = _.kebabCase(directiveName);

      var sc = this.config.get('sourceDir');
      var normalPath = path.join(sc, directivePath);

      this.fs.copyTpl(
        this.templatePath('__name__.directive.ts'),
        this.destinationPath(path.join(normalPath, directiveFileName + '.directive.ts')), {
          directiveName: directiveName
        }
      );

      helper.findFile(sc, directivePath).subscribe(function (file) {
        helper.readFile(file).subscribe(function (a) {
          if (a.isRootModule) {
            var res = helper
              .init(a.content, directiveName + 'Directive', _.join(['.', directiveFileName + '.directive'], '/'))
              .importInjector()
              .bracketDeclarationInjector()
              .beautiful()
              .writeFile(file);
            // console.log(res);
          } else {
            var res = helper
              .init(a.content, directiveName + 'Directive', _.join(['.', directiveFileName + '.directive'], '/'))
              .importInjector()
              .bracketDeclarationInjector()
              .bracketExportInjector()
              .beautiful()
              .writeFile(file);
          }
        });
      })

    } catch (err) {
      this.env.error("Ada kesalahan coy..." + err);
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
