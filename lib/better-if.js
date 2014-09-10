var betterIf = function (statements, callback) {
  var type = typeOf(statements);
  var handleStatements = {
    'boolean': function () {
      return statements;
    },
    'array': function () {
      var result = [];
      for (var i = 0; i < statements.length; i++) {
        var statement = statements[i];
        if (/object/.test(typeOf(statement))) {
          var obj = {};
          for (var o in statement) {
            obj[o] = handleObjectCondition(statement[o]);
          }
          result.push(obj);
        }
        else {
          result.push(!!statements[i]);
        }
      }
      return result;
    },
    'object': function () {
      var result = {};
      for (var i in statements) {
        result[i] = handleObjectCondition(statements[i]);
      }
      return result;
    }
  };
  var result = (handleStatements[type]) ? handleStatements[type]() : !!statements;
  if (callback) callback(result);
  return result;
};

var typeOf = function (o) {
  return toString.call(o).slice(8, -1).toLowerCase()
};

function handleObjectCondition(object) {
  return (/reg/.test(typeOf(object.expect))) ? object.expect.test(object.actual) : object.expect == object.actual;
}

module.exports = betterIf;