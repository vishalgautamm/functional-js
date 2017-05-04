var ArrayHelperModule = require("../utils/utils");
ArrayHelperModule.extendArray(Array);

/*

Exercise 19: Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array. Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.

*/

var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];


const reducedObj = arr => {
  return arr
    .reduce$((accMap, video) => {
      var obj = {}
      obj[video.id] = video.title;
      return Object.assign(accMap, obj);
    },{});
}

var res = reducedObj(videos)
console.log(res)
