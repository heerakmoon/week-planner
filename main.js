var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('#modal');

$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'black-bg';
});
