// Exercise 15: Use forEach to find the largest box art
var boxarts = [
      { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
    currentSize,
    maxSize = -1,
    largestBoxart;

var results =  boxarts.forEach(function(boxart) {
  currentSize = boxart.width * boxart.height;
  if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

const largestBox = boxArts => {
  var maxSize = -1;
  var currentSize;
  var largestBox;

  boxArts.forEach(boxart => {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBox = boxart
      maxSize = currentSize;
    }
  })
  return largestBox
}

console.log(largestBox(boxarts))
