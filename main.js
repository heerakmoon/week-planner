var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('#modal');

$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'black-bg';
});

var $closeModal = document.querySelector('.submit-button');
$closeModal.addEventListener('click', function (event) {
  $modal.className = 'hidden';
});
