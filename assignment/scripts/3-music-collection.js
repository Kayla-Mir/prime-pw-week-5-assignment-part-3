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

console.log('Adding a new album ', addToCollection('reality in BLACK', 'Mamamoo', '2019'));
console.log('Adding a new album ', addToCollection('MORE & MORE', 'TWICE', '2020'));
console.log('Adding a new album ', addToCollection('Lemonade', 'Beyonce', '2016'));
console.log('Adding a new album ', addToCollection('The Fame Monster', 'Lady Gaga', '2009'));
console.log('Adding a new album ', addToCollection('beerbongs & bentleys', 'Post Malone', '2018'));
console.log('Adding a new album ', addToCollection('Back to Black', 'Amy Winehouse', '2006'));

console.log('My collection:', collection);

function showCollection(array) {
  console.log(array.length);
  for (i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  }
}
showCollection(collection);
