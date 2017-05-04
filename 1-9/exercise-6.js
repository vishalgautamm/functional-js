// Implement filter

Array.prototype.filter$ = function(predicateFunction) {
  let results = [];
  this.forEach(itemInArray => {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray)
    }
  })
  return results;
}
