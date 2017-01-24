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
          this.templatePath('src/app/welcome/welcome.component.css'),
          this.destinationPath('src/app/welcome/welcome.component.css')
        );
        this.fs.copy(
          this.templatePath('src/app/welcome/welcome.component.html'),
          this.destinationPath('src/app/welcome/welcome.component.html')
        );
        this.fs.copy(
          this.templatePath('src/app/welcome/welcome.component.ts'),
          this.destinationPath('src/app/welcome/welcome.component.ts')
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
          this.templatePath('src/public/css/main.css'),
          this.destinationPath('src/public/css/main.css')
        );
        this.fs.copy(
          this.templatePath('src/public/images/logo-putih.png'),
          this.destinationPath('src/public/images/logo-putih.png')
        );
        this.fs.copy(
          this.templatePath('src/public/images/favicon.ico'),
          this.destinationPath('src/public/images/favicon.ico')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/css/font-awesome.min.css'),
          this.destinationPath('src/public/css/font-awesome/css/font-awesome.min.css')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/FontAwesome.otf'),
          this.destinationPath('src/public/css/font-awesome/fonts/FontAwesome.otf')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/fontawesome-webfont.eot'),
          this.destinationPath('src/public/css/font-awesome/fonts/fontawesome-webfont.eot')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/fontawesome-webfont.svg'),
          this.destinationPath('src/public/css/font-awesome/fonts/fontawesome-webfont.svg')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/fontawesome-webfont.ttf'),
          this.destinationPath('src/public/css/font-awesome/fonts/fontawesome-webfont.ttf')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/fontawesome-webfont.woff'),
          this.destinationPath('src/public/css/font-awesome/fonts/fontawesome-webfont.woff')
        );
        this.fs.copy(
          this.templatePath('src/public/css/font-awesome/fonts/fontawesome-webfont.woff2'),
          this.destinationPath('src/public/css/font-awesome/fonts/fontawesome-webfont.woff2')
        );
        this.fs.copy(
          this.templatePath('src/public/fonts/fontawesome-webfont.eot'),
          this.destinationPath('src/public/fonts/fontawesome-webfont.eot')
        );
        this.fs.copy(
          this.templatePath('src/public/fonts/fontawesome-webfont.svg'),
          this.destinationPath('src/public/fonts/fontawesome-webfont.svg')
        );
        this.fs.copy(
          this.templatePath('src/public/fonts/fontawesome-webfont.ttf'),
          this.destinationPath('src/public/fonts/fontawesome-webfont.ttf')
        );
        this.fs.copy(
          this.templatePath('src/public/fonts/fontawesome-webfont.woff'),
          this.destinationPath('src/public/fonts/fontawesome-webfont.woff')
        );
        this.fs.copy(
          this.templatePath('src/public/fonts/fontawesome-webfont.woff2'),
          this.destinationPath('src/public/fonts/fontawesome-webfont.woff2')
        );
      }
    },
    sharing: function () {
      if (this.props.yakin) {
        this.fs.copy(
          this.templatePath('src/app/shared/component/footer/footer.component.html'),
          this.destinationPath('src/app/shared/component/footer/footer.component.html')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/component/footer/footer.component.ts'),
          this.destinationPath('src/app/shared/component/footer/footer.component.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/component/sidebar/sidebar.component.html'),
          this.destinationPath('src/app/shared/component/sidebar/sidebar.component.html')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/component/sidebar/sidebar.component.ts'),
          this.destinationPath('src/app/shared/component/sidebar/sidebar.component.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/component/top-header/top-header.component.html'),
          this.destinationPath('src/app/shared/component/top-header/top-header.component.html')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/component/top-header/top-header.component.ts'),
          this.destinationPath('src/app/shared/component/top-header/top-header.component.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/directive/format-angka.directive.ts'),
          this.destinationPath('src/app/shared/directive/format-angka.directive.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/pipe'),
          this.destinationPath('src/app/shared/pipe')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/service/validation-message.service.ts'),
          this.destinationPath('src/app/shared/service/validation-message.service.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/service/token.service.ts'),
          this.destinationPath('src/app/shared/service/token.service.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/service/sidebar.service.ts'),
          this.destinationPath('src/app/shared/service/sidebar.service.ts')
        );
        this.fs.copy(
          this.templatePath('src/app/shared/model/common-response.ts'),
          this.destinationPath('src/app/shared/model/common-response.ts')
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

