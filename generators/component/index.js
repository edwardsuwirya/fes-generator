'use strict';
var fs = require('fs');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var Observable = require('rxjs/Observable').Observable;
var helper = require('../app/helper.js');

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

      var sc = this.config.get('sourceDir');
      var normalPath = path.join(sc, componentPath, componentFileName);


      this.fs.copyTpl(
        this.templatePath('__name__.component.ts'),
        this.destinationPath(path.join(normalPath, componentFileName + '.component.ts')), {
          componentName: componentName,
          componentFileName: componentFileName
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

      helper.findFile(sc, componentPath).subscribe(function (file) {
        helper.readFile(sc, componentPath, file).subscribe(function (a) {
          var res = helper
            .init(a.content, componentName + 'Component', _.join(['.', componentFileName, componentFileName + '.component'], '/'))
            .importInjector()
            .bracketInjector()
            .beautiful()
            .writeFile(a.path, file);
          // console.log(res);
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
