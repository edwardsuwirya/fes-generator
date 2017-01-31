'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

var helper = require('./helper');
var appHelper = require('../app/helper');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      chalk.green('BTPN FES Feature Module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'featureName',
      message: 'Nama Feature Module nya, brad..?',
      default: 'MyFeature'
    }, {
      type: 'input',
      name: 'pojo',
      message: 'Supply pojo nya, brad..?',
      default: 'C:\\Users\\15050978\\Desktop\\pojo.json'
    }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    try {
      var pojo = this.props.pojo;
      var stringData = '';
      var that = this;

      var featureName = _.startCase(this.props.featureName).split(' ').join('');

      var featureFileName = _.kebabCase(featureName);
      var normalPath = path.join(this.config.get('sourceDir'), featureFileName);

      fs.readFile(pojo, 'utf8', function (err, data) {
        stringData = data;

        var res = JSON.parse(stringData);
        var propsId = [];
        var propsConstructor = [];
        var propsAssignment = [];
        var formGroupItem = [];
        var propsData = '';
        var htmlElement = [];

        for (var i = 0; i < res.props.length; i++) {
          var s = res.props[i].name;
          var t = res.props[i].type;
          propsId.push(s + ':string;');
          propsConstructor.push(s + ':string');
          propsAssignment.push('    this.' + s + ' = ' + s + ';');
          formGroupItem.push(s + ': new FormControl(' + "' '" + ',Validators.required)');
          htmlElement.push(helper.getHtmlEleement(res.props[i]));
        }
        propsData += 'export class ' + featureName + '{'
        propsData += (propsId.join('\n'));
        propsData += '\n\n';
        propsData += 'constructor(' + propsConstructor.join(',') + '){';
        propsData += '\n';
        propsData += propsAssignment.join('\n') + '\n}';
        propsData += '}';
        propsData = beautify(propsData, {ident_size: 2});

        var formGroupData = beautify(formGroupItem.join(',\n'), {ident_size: 2});
        var htmlElementItem = htmlElement.join('\n');


        that.fs.copyTpl(
          that.templatePath('__name__.ts'),
          that.destinationPath(path.join(normalPath, featureFileName + '.ts')), {
            featureName: featureName,
            propsData: propsData
          });

        that.fs.copyTpl(
          that.templatePath('__name__.module.ts'),
          that.destinationPath(path.join(normalPath, featureFileName + '.module.ts')), {
            featureName: featureName,
            featureFileName: featureFileName,
            featureMainPath: _.camelCase(featureName)
          }
        );

        that.fs.copyTpl(
          that.templatePath('list/__name__.component.ts'),
          that.destinationPath(path.join(normalPath, 'list', featureFileName + '-list.component.ts')), {
            featureName: featureName,
            featureFileName: featureFileName,
            featureDetailPath: _.camelCase(featureName) + 'Detail'
          }
        );
        that.fs.copyTpl(
          that.templatePath('list/__name__.component.html'),
          that.destinationPath(path.join(normalPath, 'list', featureFileName + '-list.component.html')), {
            featureName: featureName
          }
        );
        that.fs.copyTpl(
          that.templatePath('list/__name__.component.css'),
          that.destinationPath(path.join(normalPath, 'list', featureFileName + '-list.component.css')), {
            featureName: featureName
          }
        );

        that.fs.copyTpl(
          that.templatePath('detail/__name__.component.ts'),
          that.destinationPath(path.join(normalPath, 'detail', featureFileName + '-detail.component.ts')), {
            featureName: featureName,
            featureFileName: featureFileName,
            formGroupDetail: formGroupData,
            featureListPath: _.camelCase(featureName) + 'List'
          }
        );
        that.fs.copyTpl(
          that.templatePath('detail/__name__.component.html'),
          that.destinationPath(path.join(normalPath, 'detail', featureFileName + '-detail.component.html')), {
            featureName: featureName,
            htmlElement: htmlElementItem
          }
        );
        that.fs.copyTpl(
          that.templatePath('detail/__name__.component.css'),
          that.destinationPath(path.join(normalPath, 'detail', featureFileName + '-detail.component.css')), {
            featureName: featureName
          }
        );

        that.fs.copyTpl(
          that.templatePath('__name__.service.ts'),
          that.destinationPath(path.join(normalPath, featureFileName + '.service.ts')), {
            featureName: featureName,
            lowerFeatureName: _.camelCase(featureName),
            featureFileName: featureFileName
          }
        );
      });

      var appModule = path.join(this.config.get('sourceDir'), 'app.module.ts');
      var appRouterModule = path.join(this.config.get('sourceDir'), 'app-route', 'app-route.module.ts');

      appHelper.readFile(appModule).subscribe(function (a) {
        appHelper
          .init(a.content, featureName + 'Module', _.join(['.', featureFileName, featureFileName + '.module'], '/'))
          .importInjector()
          .bracketImportInjector()
          .beautiful()
          .writeFile(appModule);
      });

      appHelper.readFile(appRouterModule).subscribe(function (a) {
        appHelper
          .init(a.content, featureName + 'ListComponent', _.join(['..', featureFileName, 'list', featureFileName + '-list.component'], '/'))
          .importInjector()
          .bracketChildrenInjector()
          .beautiful()
          .writeFile(appRouterModule);
        appHelper.readFile(appRouterModule).subscribe(function (a) {
          appHelper
            .init(a.content, featureName + 'DetailComponent', _.join(['..', featureFileName, 'detail', featureFileName + '-detail.component'], '/'))
            .importInjector()
            .bracketChildrenInjector()
            .beautiful()
            .writeFile(appRouterModule);
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
