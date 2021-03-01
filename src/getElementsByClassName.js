// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  // Declare<body>of HTML. and result array
  var bodyHtml = document.body;
  // console.log(bodyHtml);
  var result = [];

  // Declare a function for recursion
  var hasClass = function(bodyHtml) {
    if (bodyHtml.classList && bodyHtml.classList.contains(className)) {
      result.push(bodyHtml);
    }

    if (bodyHtml.hasChildNodes()) {
      for (var i = 0; i < bodyHtml.childNodes.length; i++) {
        // console.log(bodyHtml.childNodes[i]);
        hasClass(bodyHtml.childNodes[i]);
      }
    }
  };

  hasClass(bodyHtml);
  // console.log(result);
  return result;

};
