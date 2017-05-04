var ArrayHelperModule = require("../utils/utils");
ArrayHelperModule.extendArray(Array);


/*

Zipping Arrays

Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.

Exercise 21: Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.

*/

var videos = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      }
    ];
var bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ];
var counter;
var videoIdAndBookmarkIdPairs = [];
var length = Math.min(videos.length, bookmarks.length);

for(counter = 0; counter < length; counter++) {
  videoIdAndBookmarkIdPairs.push(
    {
      videoId: videos[counter].id,
      bookmarkId: bookmarks[counter].id
    }
  )
}

console.log(videoIdAndBookmarkIdPairs)
