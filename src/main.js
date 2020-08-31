// Create variables targetting the relevant DOM elements here 👇

var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');


// change image src
// document.getElementById('myImageID').src="images/my_other_image.png";

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

// console.log("savedCovers", savedCovers);

// Create your event handlers and other functions here 👇

window.addEventListener('load', createCover);




// We've provided one function to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


// use to grab a random cover from the array in data.js file
// console.log(getRandomIndex(covers));
// console.log(covers[getRandomIndex(covers)]);

function createCover() {

  var randomCover = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomTag1 = getRandomIndex(descriptors);
  var randomTag2 = getRandomIndex(descriptors);
  currentCover = new Cover(randomCover, randomTitle, randomTag1, randomTag2);

  showCover(currentCover);

}


function showCover(coverObj) {

  coverImg.src = coverObj.cover;
  coverTitle.innerText = coverObj.title;
  tagline1.innerText = coverObj.tagline1;
  tagline2.innerText = coverObj.tagline2;

}

// the 'covers' array (from data file) is passed in as an argument to the getRandomIndex function.
// that function returns a randomly generated index number relative to the 'covers' array,
// which is then


///// We need to create an event listener for the page refresh.
///// When the page is refreshed, the browser will show a new, randomly-selected cover (and title, etc)
/////
///// DECLARE the variables for ALL of the DOM elements which will need to be used.
///// for the '.cover-image' '.cover-title' '.tagline-1' '.tagline-2'
///// for each (all) of the randomly generated values
