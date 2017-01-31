'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-btpn-fes:validator', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/validator'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '__name__.validator.ts'
    ]);
  });
});
