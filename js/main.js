/* global data */
/* exported data */

var $photo = document.querySelector('.photoURL');
var $source = document.querySelector('img');
var $submitForm = document.getElementById('journal-form');
var $title = document.querySelector('.input-area');
var $notes = document.querySelector('.notes');
var $ul = document.querySelector('ul');
var $entriesTab = document.querySelector('a');
var $noEntry = document.querySelector('.no-entries');
var $newEntry = document.querySelector('.new-button');
var $dataView = document.querySelectorAll('div[data-view]');

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
window.addEventListener('DOMContentLoaded', appendRenderEntry);
$entriesTab.addEventListener('click', handleViewSwitch);
$newEntry.addEventListener('click', handleViewSwitch);
$ul.addEventListener('click', entryParent);
function submit(event) {
  event.preventDefault();
  if (data.editing === null) {
    var newObj = {
      input: $title.value,
      photo: $photo.value,
      notes: $notes.value
    };

    newObj.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.push(newObj);
    $source.setAttribute('src', './images/placeholder-image-square.jpg');

    $ul.prepend(renderEntry(newObj));
  } else {
    data.editing.input = $title.value;
    data.editing.photo = $photo.value;
    data.editing.notes = $notes.value;
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i] = data.editing;
        // console.log(data.entries[i]);
        var newNode = document.querySelectorAll('.updated-entry');
        // console.log(newNode);
        // var editedEntry = renderEntry(data.editing);
        // console.log(editedEntry);
        // console.log(renderEntry(data.editing));
        // newNode[i].replaceWith(editedEntry);
        for (var j = 0; j < newNode.length; j++) {
          newNode[j].remove();
        }
        appendRenderEntry();
      }
    }
  }
  $submitForm.reset($submitForm);
  switchViews('entries');
}

// make a function that loads a dom tree
function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'updated-entry');

  var rowPadding = document.createElement('div');
  rowPadding.className = 'row padding';
  li.appendChild(rowPadding);
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

  var row = document.createElement('div');
  row.setAttribute('class', 'row between center');
  entryText.appendChild(row);

  var title = document.createElement('h2');
  var titleText = document.createTextNode(entry.input);
  title.appendChild(titleText);
  entryText.appendChild(title);

  row.appendChild(title);

  var icon = document.createElement('i');
  icon.setAttribute('class', 'fas fa-pen');
  icon.setAttribute('data-entry-id', entry.entryId);
  row.appendChild(icon);
  var notes = document.createElement('p');
  var notesText = document.createTextNode(entry.notes);
  notes.appendChild(notesText);
  entryText.appendChild(notes);
  return li;
}

// use a loop to create a DOM tree for each entry in data model
// loop throough the entries
// append it to the page by appending the function to the ul
// append it when DOMContentLoaded event is fired
function appendRenderEntry(event) {
  for (var i = data.entries.length - 1; i >= 0; i--) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
}

// listen for a click event on the entries tab
// if user presses entries tab, remove the hidden class from the data view entries element
// add the hidden class to the form

function handleViewSwitch(event) {
  var viewName = event.target.getAttribute('data-view');
  switchViews(viewName);
}

function switchViews(string) {
  for (var i = 0; i < $dataView.length; i++) {
    if ($dataView[i].getAttribute('data-view') !== string) {
      $dataView[i].classList.add('hidden');
    } else {
      $dataView[i].classList.remove('hidden');
      data.view = string;
    }
    if (data.entries.length > 0) {
      $noEntry.setAttribute('class', 'no-entries hidden');
    } else {
      $noEntry.setAttribute('class', 'no-entries');
    }
  }
}
// if the target matches the edit icon
// get the data attirbute of the entry
// use data.editing to the data entries id
// switch views to the entry form
// display the title, photo, and notes value
function entryParent(event) {
  var selected;
  if (event.target.matches('i.fas.fa-pen')) {
    // console.log('this has been reached');
    var entryId = event.target.getAttribute('data-entry-id');
    var parsedEntry = parseInt(entryId);
    // console.log(parsedEntry);
    for (var i = 0; i < data.entries.length; i++) {
      var object = data.entries[i];
      if (object.entryId === parsedEntry) {
        selected = object;
      //  console.log(selected);
      }
    }
    data.editing = selected;
    switchViews('entry-form');
    $title.value = selected.input;
    $photo.value = selected.photo;
    $notes.value = selected.notes;
  }
}
switchViews(data.view);
