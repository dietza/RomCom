//querySelectors for displayed cover elements
var domCoverImg = document.querySelector('.cover-image');
var domTitle = document.querySelector('.cover-title');
var domTagLine1 = document.querySelector('.tagline-1');
var domTagLine2 = document.querySelector('.tagline-2');

//buttons
var homeButton = document.querySelector('.home-button');
var showRandomButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');

//sections
var sectionHome = document.querySelector('.home-view');
var sectionSaved = document.querySelector('.saved-view');
var sectionForm = document.querySelector('.form-view');

//form inputs
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputTagline1 = document.querySelector('.user-desc1');
var inputTagline2 = document.querySelector('.user-desc2');



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener()

showRandomButton.addEventListener('click', showRandomCover);
makeNewButton.addEventListener('click', showNewCoverForm);
homeButton.addEventListener('click',showHome);
viewSavedButton.addEventListener('click', showSaved);



// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// returns the value associated with the randomly generated index for any given array
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function showNewCoverForm() {

  //show/hide buttons
  homeButton.classList.remove('hidden');
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

  //hide other sections
  sectionHome.classList.add('hidden');
  sectionSaved.classList.add('hidden');

  //clear form
  clearForm();

  //show form section
  sectionForm.classList.remove('hidden');
}

function clearForm() {
  //separate function because we will call it more than once
  inputTitle.value = inputCover.value = inputTagline1.value = inputTagline2.value = '';
}

function showSaved() {
  homeButton.classList.remove('hidden');
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

  //hide other sections
  sectionHome.classList.add('hidden');
  sectionForm.classList.add('hidden');

  //show form section
  sectionSaved.classList.remove('hidden');
}

function showHome() {
  homeButton.classList.add('hidden');
  showRandomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');

  //hide other sections
  sectionForm.classList.add('hidden');
  sectionSaved.classList.add('hidden');

  //clear form ...show new random?
  createRandomCover();

  //show Home section
  sectionHome.classList.remove('hidden');
}

////////
// function showRandomCover() {
//   createRandomCover();
//   displayCover();
// }

////////
// function createRandomCover() {
//   currentCover = new Cover(covers[getRandomIndex(covers)],titles[getRandomIndex(titles)],descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
// }

////////
function createRandomCover() {

  var randomCover = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomTag1 = getRandomIndex(descriptors);
  var randomTag2 = getRandomIndex(descriptors);
  currentCover = new Cover(randomCover, randomTitle, randomTag1, randomTag2);

  showCover(currentCover);

}

////////
function showCover(coverObj) {

  domCoverImg.src = coverObj.cover;
  domTitle.innerText = coverObj.title;
  domTagLine1.innerText = coverObj.tagline1;
  domTagLine2.innerText = coverObj.tagline2;

}

//////
// function displayCover(){
//   domCover.src = currentCover.cover;
//   domTitle.innerHTML = currentCover.title;
//   domTagLine1.innerHTML = currentCover.tagline1;
//   domTagLine2.innerHTML = currentCover.tagline2;
// }
