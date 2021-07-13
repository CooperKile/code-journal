/* global data */
/* exported data */

// update image function
// we will be listening for someone to input a url to the photo url
// once we recive the photoURL we will update the image source
// first we query the dom for the photoURL element
// query the dom for an image source
// add an event listener
// if the photoURL value does not equal an empty string
// update the image source
var $photo = document.querySelector('.photoURL');
var $source = document.querySelector('img');
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

var $submitForm = document.getElementById('journal-form');
$submitForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var inputVals = {};
  inputVals.push($submitForm.inputVals);
});
