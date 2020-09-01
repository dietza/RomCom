var domCover = document.querySelector('.cover-image');
var domTitle = document.querySelector('.cover-title');
var domTagLine1 = document.querySelector('.tagline-1');
var domTagLine2 = document.querySelector('.tagline-2');

//buttons
var showRandomButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
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
showRandomButton.addEventListener('click', showRandomCover);
makeNewButton.addEventListener('click', showNewCoverForm);
homeButton.addEventListener('click',showHome);
viewSavedButton.addEventListener('click', showSaved);



window.addEventListener('load', createCover);

newRandomCoverButton.addEventListener('click', createCover);


// We've provided one function to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}



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
  showRandomCover();

  //show Home section
  sectionHome.classList.remove('hidden');
}


function showRandomCover() {
  createRandomCover();
  displayCover();
}

function createRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)],titles[getRandomIndex(titles)],descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function displayCover(){
  domCover.src = currentCover.cover;
  domTitle.innerHTML = currentCover.title;
  domTagLine1.innerHTML = currentCover.tagline1;
  domTagLine2.innerHTML = currentCover.tagline2;
}
