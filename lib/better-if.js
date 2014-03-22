var betterIf = function (statements, callback) {
  var result;

  switch (typeOf(statements)) {
    case 'boolean':
      result = statements;
      checkCallback(callback, result);
      break;
    case 'array':
      result = [];
      for (var i = 0; i < statements.length; i++) {
        var statement = statements[i];
        if (typeOf(statement) == 'object') {
          var obj = {};
          for (var o in statement) {
            obj[o] = handleObjectCondition(statement[o])
          }
          result.push(obj);
        }
        else {
          result.push(!!statements[i]);
        }
      }
      checkCallback(callback, result);
      break;
    case 'object':
      result = {};
      for (var i in statements) {
        result[i] = handleObjectCondition(statements[i]);
      }
      checkCallback(callback, result);
      break;
    default:
      result = !!statements;
      checkCallback(callback, result);
      break;
  }

  return result;
};

function checkCallback(callback, value) {
  if (callback) callback(value);
}

function typeOf(object) {
  return toString.call(object).slice(8, -1).toLowerCase();
}
function handleObjectCondition(object) {
  if (typeOf(object.expect) == 'regexp') {
    return object.expect.test(object.actual);
  }
  else {
    return (object.actual == object.expect);
  }
}

module.exports = betterIf;