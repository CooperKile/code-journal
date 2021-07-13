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
