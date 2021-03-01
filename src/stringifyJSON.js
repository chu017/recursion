// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var arrOfKeyValues = [];
  var arrValues = [];
  var objKeys = [];

  // base case
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;

  } else if (typeof obj === 'string') {
    return '"' + obj + '"';


  // recursive case - array
  } else if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      return '[]';
    } else {
      obj.forEach(function(item) {
        arrValues.push(stringifyJSON(item));
      });
      return '[' + arrValues + ']';
    }

  // recursive case - object
  } else if (obj instanceof Object) {
    objKeys = Object.keys(obj);

    objKeys.forEach(function(key) {
      var keyOut = '"' + key + '":';
      var keyValueOut = obj[key];
      if (typeof keyValueOut === 'function' ||
      typeof keyValueOut === undefined) {
        arrOfKeyValues.push('');
      } else if (typeof keyValueOut === 'string') {
        arrOfKeyValues.push(keyOut + '"' + keyValueOut + '"');

      } else if (typeof keyValueOut === 'boolean'
      || typeof keyValueOut === 'number' || keyValueOut === null) {
        arrOfKeyValues.push(keyOut + keyValueOut);

        console.log(arrOfKeyValues);

      } else if (keyValueOut instanceof Object) {
        arrOfKeyValues.push(keyOut + stringifyJSON(keyValueOut));
      }

    });

    return '{' + arrOfKeyValues + '}';
  }

};