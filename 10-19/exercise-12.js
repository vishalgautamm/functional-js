// Implementing Concat map

Array.prototype.concatAll$ = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(items) {
      results.push(items)
    })
  });

  return results;
};

Array.prototype.concatMap$ = function(projFunctionThatReturnsArray) {
  return this
    .map(function (items) {
      return projFunctionThatReturnsArray(items)
    }).
    concatAll$()
}
