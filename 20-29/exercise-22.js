const ArrayHelperModule = require("../utils/utils");
ArrayHelperModule.extendArray(Array);

/*
Exercise 23: Combine videos and bookmarks by index
Let's repeat exercise 21, but this time lets use your new zip() function. For each video and bookmark pair, create a {videoId, bookmarkId} pair.
*/

const videos = [
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
  const bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ];

// Solution
const result = Array.prototype.zip$(
    videos,
    bookmarks,
    (video, bookmark) => ({videoId: video.id, bookmarkId: bookmark.id}))
console.log(result)
