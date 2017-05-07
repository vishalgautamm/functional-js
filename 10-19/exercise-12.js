var ArrayHelperModule = require("../utils/utils");
ArrayHelperModule.extendArray(Array);

// Implementing Concat map
Array.prototype.concatMap$ = function(projFunctionThatReturnsArray) {
  return this
    .map(function (items) {
      return projFunctionThatReturnsArray(items)
    }).
    concatAll$()
}
