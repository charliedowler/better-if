var betterIf = function (statements, callback) {
  var type = toString.call(statements).slice(8, -1).toLowerCase()
    , result;

  if (type == 'boolean') {
    result = statements;
    betterIf.callback(callback, result);
  }
  else if (type == 'array') {
    result = [];
    for (var i = 0; i < statements.length; i++) {
      result.push(!!statements[i]);
    }
    betterIf.callback(callback, result);
  }
  else if (type == 'object') {
    result = {};
    for (var i in statements) {
      result[i] = (statements[i].actual == statements[i].expect);
    }
    betterIf.callback(callback, result);

  }
  else {
    result = !!statements;
    betterIf.callback(callback, result);
  }
  return result;
};

betterIf.callback = function (callback, value) {
  if (callback) callback(value);
};

module.exports = betterIf;