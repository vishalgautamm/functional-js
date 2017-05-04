// Imlement Map

Array.prototype.map$ = function(projectionFunction) {
  var results = []
  this.forEach(function(item) {
    results.push(projectionFunction(item))
  })
  return results
}

var arr = [1, 2, 3, 4, 5]

var test$ = arr.map$(items => items * 2)
console.log(test$);
