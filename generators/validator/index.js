'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.green('BTPN FES Validator') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'validatorName',
      message: 'Nama Validator nya, brad..?',
      default: 'MyValidator'
    }, {
      type: 'input',
      name: 'validatorPath',
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
      var validatorName = _.startCase(this.props.validatorName).split(' ').join('');
      var validatorPath = this.props.validatorPath;

      var validatorFileName = _.kebabCase(validatorName);
      var normalPath = path.join(this.config.get('sourceDir'), validatorPath);

      this.fs.copyTpl(
        this.templatePath('__name__.validator.ts'),
        this.destinationPath(path.join(normalPath, validatorFileName + '.validator.ts')), {
          validatorName: validatorName
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
