function extendArray(arrayConstructor)
{
    arrayConstructor.prototype.map$ = function(projectionFunction) {
      var results = []
      this.forEach(function(item) {
        results.push(projectionFunction(item))
      })
      return results
    };

    arrayConstructor.prototype.filter$ = function(predicateFunction) {
      let results = [];
      this.forEach(itemInArray => {
        if (predicateFunction(itemInArray)) {
          results.push(itemInArray)
        }
      })
      return results;
    };

    arrayConstructor.prototype.concatAll$ = function() {
      var results = [];
      this.forEach(function(subArray) {
        subArray.forEach(function(items) {
          results.push(items)
        })
      });
      return results;
    };

    arrayConstructor.prototype.concatMap$ = function(projFunctionThatReturnsArray) {
      return this
        .map(function (items) {
          return projFunctionThatReturnsArray(items)
        }).
        concatAll$()
    };

    arrayConstructor.prototype.reduce$ = function(combiner, initialValue) {
      var counter,
      accumulatedValue;
      if (this.length === 0) {
        return this;
      } else {
        if (arguments.length === 1) {
          counter = 1;
          accumulatedValue = this[0];
        } else if (arguments.length >= 2) {
          counter = 0;
          accumulatedValue = initialValue;
        } else {
          throw "Invalid arguments.";
        }

        while(counter < this.length) {
          accumulatedValue = combiner(accumulatedValue, this[counter])
          counter++;
        }
        return [accumulatedValue];
      }
    };
}

exports.extendArray = extendArray;
