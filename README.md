# BetterIf [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Simple module for better if statements

##Usage:
```javascript
var ifs = require('better-if');

//Objects
ifs({
  id: {
    expect: 1,
    actual: 1
  },
  password: {
    expect: /password/,
    actual: 'password'
  }
}, function(results) {
  console.log(results.id); //true
});

// Bools
ifs('testing' == 'testing', function(result) {
  console.log(result); //true
});

// String
ifs('lol wut', function(result) {
  console.log(result); //true
});

// Array
ifs([true == true, false, 'test' == 'test', {
  isAwesome: {
    expect: true,
    actual: true
  }
}], function(results) {
  console.log(results[0]); //true
  console.log(results[1]); //false
  console.log(results[2]); //true
  console.log(results[3].isAwesome); //true
});

// Without callback
var statement = ifs('true' == 'false');
console.log(statement); //false
```

[npm-url]: https://npmjs.org/package/better-if
[npm-image]: https://badge.fury.io/js/better-if.png

[travis-url]: http://travis-ci.org/charliedowler/better-if
[travis-image]: https://secure.travis-ci.org/charliedowler/better-if.png?branch=master