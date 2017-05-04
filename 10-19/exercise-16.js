var ArrayHelperModule = require("../utils/utils");
ArrayHelperModule.extendArray(Array);

var ratings = [2,3,1,4,5]
var largest = ratings.reduce$((acc, curr) => acc > curr ? acc : curr)
console.log(largest)
