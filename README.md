# BetterIf (WIP)

Simple module for better if statements

##Usage:
```javascript
var ifs = require('better-if');

//Objects
ifs({
    id: {
        actual: 1,
        expect: 1
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
ifs([true == true, false, 'test' == 'test'], function(results) {
    console.log(result[0]); //true
    console.log(result[1]); //false
    console.log(result[2]); //true
});

// Without callback
var statement = ifs('true' == 'false');
console.log(statement); //false
```