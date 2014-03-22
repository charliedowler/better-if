var test = require('simple-test-framework');
var ifs = require('../index');

test('Check if object conditions work', function (t) {
  var data = {
    name: 'bob'
  };

  ifs({
    testBool: {
      actual: true,
      expect: true
    },
    hasProp: {
      actual: data.hasOwnProperty('name'),
      expect: false
    },
    doesRegexWork: {
      actual: 'test',
      expect: /test/
    }
  }, function (results) {
    t.check(results.testBool, 'testBool equals true');
    t.check(!results.hasProp, 'hasProp equals false');
    t.check(results.doesRegexWork, 'doesRegexWork equals false');
    t.finish();
  });
});

test('Check if array conditions work', function (t) {
  ifs([true, false, true == false, 'charlie', {
    isAwesome: {
      actual: true,
      expect: true
    }
  }], function (results) {
    t.check(results[0], 'should equal true');
    t.check(!results[1], 'should equal false');
    t.check(!results[2], 'should equal false');
    t.check(results[3], 'should equal true');
    t.check(results[4].isAwesome, 'should equal true');
    t.finish();
  });
});

test('Check if strings work', function (t) {
  ifs('lol', function (result) {
    t.check(result, 'returns true');
    t.finish();
  });
});

test('Check if boolean works', function (t) {
  ifs('true' == true, function (result) {
    t.check(!result, 'returns false');
  });
  ifs(true == true, function (result) {
    t.check(result, 'returns true');
  });
  t.finish();
});