/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
// listen for an unload on the window
// stringify the data
// set the item key to entry and add the dataJSON
window.addEventListener('beforeunload', storeData);
function storeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

// get the previous Entry and assign it to a new variable
// if the previous entry is not null
// take the previous entry and parse it to the entries in the data model

var previousEntryJSON = localStorage.getItem('data');
if (previousEntryJSON !== null) {
  data = (JSON.parse(previousEntryJSON));
}
