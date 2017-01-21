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
      chalk.blue('BTPN FES Pipe') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'pipeName',
      message: 'Nama Pipe nya, genks..?',
      default: 'MyDirective'
    }, {
      type: 'input',
      name: 'pipePath',
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
      var pipeName = _.startCase(this.props.pipeName).split(' ').join('');
      var pipePath = this.props.pipePath;

      var pipeFileName = _.kebabCase(pipeName);

      var sc = this.config.get('sourceDir');

      var normalPath = path.join(sc, pipePath);

      this.fs.copyTpl(
        this.templatePath('__name__.pipe.ts'),
        this.destinationPath(path.join(normalPath, pipeFileName + '.pipe.ts')), {
          pipeName: pipeName
        }
      );

      helper.findFile(sc, pipePath).subscribe(function (file) {
        helper.readFile(file).subscribe(function (a) {
          if (a.isRootModule) {
            var res = helper
              .init(a.content, pipeName + 'Pipe', _.join(['.', pipePath, pipeFileName + '.pipe'], '/'))
              .importInjector()
              .bracketDeclarationInjector()
              .beautiful()
              .writeFile(file);
            // console.log(a);
          }else{
            var res = helper
              .init(a.content, pipeName + 'Pipe', _.join(['.', pipePath, pipeFileName + '.pipe'], '/'))
              .importInjector()
              .bracketDeclarationInjector()
              .bracketExportInjector()
              .beautiful()
              .writeFile(file);
          }
        });
      });

    } catch (err) {
      this.env.error("Ada kesalahan coy..." + err);
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
