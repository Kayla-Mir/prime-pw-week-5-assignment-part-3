console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  let awesomeAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(awesomeAlbum);
  return awesomeAlbum;
}

console.log('Adding a new album:', addToCollection(
  'reality in BLACK',
  'Mamamoo',
  '2019',
  [
    {
      name: 'Universe',
      duration: '3:36'
    },
    {
      name: 'Destiny',
      duration: '4:08'
    },
    {
      name: '4x4ever',
      duration: '3:04'
    },
    {
      name: 'Better',
      duration: '3:16'
    },
    {
      name: 'HIP',
      duration: '3:15'
    }
  ]
));
console.log('Adding a new album:', addToCollection(
  'MORE & MORE',
  'TWICE',
  '2020',
  [
    {
      name: 'MORE & MORE',
      duration: '3:20'
    },
    {
      name: 'FIREWORK',
      duration: '3:13'
    },
    {
      name: 'OXYGEN',
      duration: '3:45'
    }
  ]
));
console.log('Adding a new album:', addToCollection(
  'Lemonade',
  'Beyonce',
  '2016',
  [
    {
      name: 'Formation',
      duration: '3:26'
    },
    {
      name: 'Sorry',
      duration: '3:53'
    },
    {
      name: 'Daddy Lessons',
      duration: '4:47'
    }
  ]
));
console.log('Adding a new album:', addToCollection(
  'The Fame Monster',
  'Lady Gaga',
  '2009',
  [
    {
      name: 'Bad Romance',
      duration: '4:54'
    },
    {
      name: 'Teeth',
      duration: '3:40'
    },
    {
      name: 'Speechless',
      duration: '4:30'
    }
  ]
));
console.log('Adding a new album:', addToCollection(
  'beerbongs & bentleys',
  'Post Malone',
  '2018',
  [
    {
      name: 'Rockstar(feat. 21 Savage)',
      duration: '3:38'
    },
    {
      name: 'Better Now',
      duration: '3:51'
    },
    {
      name: 'Paranoid',
      duration: '3:41'
    }
  ]
));
console.log('Adding a new album:', addToCollection(
  'Feel Special',
  'TWICE',
  '2019',
  [
    {
      name: 'Feel Special',
      duration: '3:26'
    },
    {
      name: 'GET LOUD',
      duration: '3:06'
    },
    {
      name: 'TRICK IT',
      duration: '3:14'
    },
    {
      name: '21:29',
      duration: '3:48'
    }
  ]
));

console.log('My collection:', collection);

function showCollection(myArray) {
  for (i = 0; i < myArray.length; i++) {
    console.log(`${myArray[i].title} by ${myArray[i].artist} published in`
      + `${myArray[i].yearPublished}:`)
    for (let track of collection[i].tracks) {
      console.log(`${collection[i].tracks.indexOf(track) + 1}: ${track.name}:`
      + `${track.duration}`);
    }
  }
}

showCollection(collection);

function findByArtist(artist) {
  let isThisYourArtist = [];
  for (i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      isThisYourArtist.push(collection[i]);
    }
  }
  return isThisYourArtist;
}

console.log('Do I have TWICE?:', findByArtist('TWICE'));
console.log('Do I have Purple Kiss?:', findByArtist('Purple Kiss'));

function search(searchObject) {
  let allMatchingItems = [];
  for (i = 0; i < collection.length; i++) {
    if (!searchObject || Object.keys(searchObject).length === 0) {
      return collection;
    } else if (collection[i].artist === searchObject.artist &&
      collection[i].yearPublished === searchObject.yearPublished) {
      allMatchingItems.push(collection[i]);
    } else if (searchObject.trackName) {
      for (let track of collection[i].tracks) {
        if (track.name === searchObject.trackName) {
          allMatchingItems.push(collection[i]);
          console.log(`Found ${searchObject.trackName} in the album`
            + ` ${collection[i].title}.`);
          return allMatchingItems;
        }
      }
      if (i === collection.length - 1 && allMatchingItems.length === 0) {
        console.log(`Couldn't find: ${searchObject.trackName}`);
      }
    }
  }
  return allMatchingItems;
}

console.log('Searching for TWICE in 2019:', search(
  {artist: 'TWICE', yearPublished: '2019'}
));

console.log('Should return an empty array:', search(
  {artist: 'no', yearPublished: 'yes'}
));

console.log('Should return the full collection:', search({}));

console.log('Searching for song:', search({trackName: 'Paranoid'}));

console.log('Searching for song:', search({trackName: 'Viva la Vida'}));
