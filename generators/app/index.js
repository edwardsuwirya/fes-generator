'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Selamat Datang Di ' + chalk.red('BTPN FES') + ' generator!'
    ));
    var prompts = [{
      type: 'confirm',
      name: 'yakin',
      message: 'Yakin nih ? Path nya sudah sesuai ?',
      default: false
    }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  configuring: {
    config: function () {
      if (this.props.yakin) {
        this.config.set('projectDir', this.destinationRoot());
        this.config.set('sourceDir', path.join(this.destinationRoot(), 'src', 'app'));
        this.config.save();
      }
    }
  },
  writing: {
    config: function () {
      if (this.props.yakin) {
        this.fs.copy(
          this.templatePath('karma.conf.js'),
          this.destinationPath('karma.conf.js')
        );
        this.fs.copy(
          this.templatePath('package.json'),
          this.destinationPath('package.json')
        );
        this.fs.copy(
          this.templatePath('bower.json'),
          this.destinationPath('bower.json')
        );
        this.fs.copy(
          this.templatePath('tsconfig.json'),
          this.destinationPath('tsconfig.json')
        );
        this.fs.copy(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js')
        );

        this.fs.copy(
          this.templatePath('config/helpers.js'),
          this.destinationPath('config/helpers.js')
        );
        this.fs.copy(
          this.templatePath('config/webpack.common.js'),
          this.destinationPath('config/webpack.common.js')
        );
        this.fs.copy(
          this.templatePath('config/webpack.dev.js'),
          this.destinationPath('config/webpack.dev.js')
        );
        this.fs.copy(
          this.templatePath('config/webpack.prod.js'),
          this.destinationPath('config/webpack.prod.js')
        );
        this.fs.copy(
          this.templatePath('config/webpack.test.js'),
          this.destinationPath('config/webpack.test.js')
        );
      }
    },
    app: function () {
      if (this.props.yakin) {
        this.fs.copy(
          this.templatePath('src/index.html'),
          this.destinationPath('src/index.html')
        );
        this.fs.copy(
          this.templatePath('src/main.ts'),
          this.destinationPath('src/main.ts')
        );
        this.fs.copy(
          this.templatePath('src/main.ts'),
          this.destinationPath('src/main.ts')
        );
        this.fs.copy(
          this.templatePath('src/polyfills.ts'),
          this.destinationPath('src/polyfills.ts')
        );
        this.fs.copy(
          this.templatePath('src/vendor.ts'),
          this.destinationPath('src/vendor.ts')
        );
        // Copy App Folder
        this.fs.copy(
          this.templatePath('src/app/app.component.css'),
          this.destinationPath('src/app/app.component.css')
        );
        this.fs.copy(
          this.templatePath('src/app/app.component.html'),
          this.destinationPath('src/app/app.component.html')
        );
        this.fs.copy(
          this.templatePath('src/app/app.component.ts'),
          this.destinationPath('src/app/app.component.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/app.module.ts'),
          this.destinationPath('src/app/app.module.ts')
        );
        //Copy Public Folder
        this.fs.copy(
          this.templatePath('src/public/css/styles.css'),
          this.destinationPath('src/public/css/styles.css')
        );
        this.fs.copy(
          this.templatePath('src/public/images/angular.png'),
          this.destinationPath('src/public/images/angular.png')
        );
      }
    },
    sharing: function () {
      if (this.props.yakin) {
        this.fs.copy(
          this.templatePath('src/app/shared/component'),
          this.destinationPath('src/app/shared/component')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/directive'),
          this.destinationPath('src/app/shared/directive')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/pipe'),
          this.destinationPath('src/app/shared/pipe')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/service'),
          this.destinationPath('src/app/shared/service')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/model'),
          this.destinationPath('src/app/shared/model')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/shared.module.ts'),
          this.destinationPath('src/app/shared/shared.module.ts')
        );
      }
    },
    routing: function () {
      if (this.props.yakin) {
        this.fs.copy(
          this.templatePath('src/app/app-route/app-route.module.ts'),
          this.destinationPath('src/app/app-route/app-route.module.ts')
        );
      }
    }
  },
  install: function () {
    if (this.props.yakin) {
      this.installDependencies({
        npm: false,
        bower: true
      });
      // this.npmInstall();
    }
  }
});

