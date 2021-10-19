console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let awesomeAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(awesomeAlbum);
  return awesomeAlbum;
}

console.log('Adding a new album:', addToCollection('reality in BLACK', 'Mamamoo', '2019'));
console.log('Adding a new album:', addToCollection('MORE & MORE', 'TWICE', '2020'));
console.log('Adding a new album:', addToCollection('Lemonade', 'Beyonce', '2016'));
console.log('Adding a new album:', addToCollection('The Fame Monster', 'Lady Gaga', '2009'));
console.log('Adding a new album:', addToCollection('beerbongs & bentleys', 'Post Malone', '2018'));
console.log('Adding a new album:', addToCollection('Feel Special', 'TWICE', '2019'));

console.log('My collection:', collection);

function showCollection(myArray) {
  console.log(myArray.length);
  for (i = 0; i < myArray.length; i++) {
    console.log(`${myArray[i].title} by ${myArray[i].artist}, published in
      ${myArray[i].yearPublished}.`);
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
