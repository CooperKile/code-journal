/* global data */
/* exported data */

var $photo = document.querySelector('.photoURL');
var $source = document.querySelector('img');
var $submitForm = document.getElementById('journal-form');
var $title = document.querySelector('.input-area');
var $notes = document.querySelector('.notes');
var $ul = document.querySelector('ul');

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
  imgSrc.setAttribute = ('src', '$source.value');
  entryImg.appendChild(imgSrc);
  var entryText = document.createElement('div');
  entryText.className = 'column-half';
  var title = document.createElement('h2');
  entryText.appendChild(title);
  var notes = document.createElement('p');
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
/** dom tree for entries
<div class="row padding">
  <div class="column-half">
    <div class="entry-img">
      <img src="./images/placeholder-image-square.jpg">
    </div>
  </div>
  <div class="column-half">
    <h1>Title</h1>
    <p>Random text</p>
  </div>
</div>
<div class="row padding">
  <div class="column-half">
    <div class="entry-img">
      <img src="./images/placeholder-image-square.jpg">
    </div>
  </div>
    <div class="column-half">
      <h1>Title</h1>
      <p>Random text</p>
  </div>
</div>
*/
