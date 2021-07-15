/* global data */
/* exported data */

var $photo = document.querySelector('.photoURL');
var $source = document.querySelector('img');
var $submitForm = document.getElementById('journal-form');
var $title = document.querySelector('.input-area');
var $notes = document.querySelector('.notes');
var $ul = document.querySelector('ul');
var $entryForm = document.querySelector('.entry-from');
var $entriesTab = document.querySelector('a');
var $entriesPage = document.querySelector('.entries-page');
var $noEntry = document.querySelector('.no-entries');
var $newEntry = document.querySelector('.new-button');

// we will be listening for someone to input a url to the photo url
// once we recive the photoURL we will update the image source
// query the dom for the photoURL element
// query the dom for an image source
// add an event listener
// if the photoURL value does not equal an empty string
// update the image source
$photo.addEventListener('input', function (event) {
  if ($photo.value !== null) {
    $source.src = $photo.value;
  }
});

// sample url https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png
// listen for submit events
// add an event listener to the save entry class
// put forms input values into a new object
// add nextEntryId to the object
// increment nextEntryId on the data model
// prepend the new object to the entries data model
// reset the image previews src attribute
// reset the input forms

$submitForm.addEventListener('submit', submit);
function submit(event) {
  event.preventDefault();
  var newObj = {
    input: $title.value,
    photo: $photo.value,
    notes: $notes.value
  };
  newObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(newObj);
  $source.setAttribute('src', './images/placeholder-image-square.jpg');
  $submitForm.reset($submitForm);
}

// make a function that loads a dom tree
function renderEntry(entry) {
  var rowPadding = document.createElement('div');
  rowPadding.className = 'row padding';
  var columnHalf = document.createElement('div');
  columnHalf.className = 'column-half';
  rowPadding.appendChild(columnHalf);

  var entryImg = document.createElement('div');
  entryImg.className = 'entry-img';
  columnHalf.appendChild(entryImg);

  var imgSrc = document.createElement('img');
  imgSrc.setAttribute('src', entry.photo);
  entryImg.appendChild(imgSrc);

  var entryText = document.createElement('div');
  entryText.className = 'column-half';
  rowPadding.appendChild(entryText);

  var title = document.createElement('h2');
  var titleText = document.createTextNode(entry.input);
  title.appendChild(titleText);
  entryText.appendChild(title);

  var notes = document.createElement('p');
  var notesText = document.createTextNode(entry.notes);
  notes.appendChild(notesText);
  entryText.appendChild(notes);
  return rowPadding;
}

// use a loop to create a DOM tree for each entry in data model
// loop throough the entries
// append it to the page by appending the function to the ul
// append it when DOMContentLoaded event is fired
function appendRenderEntry(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
}
window.addEventListener('DOMContentLoaded', appendRenderEntry);

// listen for a click event on the entries tab
// if user presses entries tab, remove the hidden class from the data view entries element
// add the hidden class to the form
$entriesTab.addEventListener('click', clickEntries);
function clickEntries(event) {
  data.view = 'entries';
  $entriesPage.setAttribute('class', '$entriesPage');
  $entryForm.setAttribute('class', '$entryForm hidden');
} if (data.entries.length > 0) {
  $noEntry.setAttribute('class', 'no-entries hidden');
} else {
  $noEntry.setAttribute('class', 'no-entries');
}
// add an event listener to the new button
// if user presses the button, remove hidden class from the form
// add hidden class to the data view entries
$newEntry.addEventListener('click', newEntry);
function newEntry(event) {
  data.view = 'entry-form';
  $entryForm.setAttribute('class', '$entryForm');
  $entriesPage.setAttribute('class', '$entriesPage hidden');
}

// if the window = entry form
// load the page with the blank form
// else if window = entries page
// load the page with the entries
if (data.view === 'entry-form') {
  $submitForm();
} else if (data.view === 'entries') {
  clickEntries();
}
