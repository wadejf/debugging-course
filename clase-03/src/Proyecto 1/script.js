var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

function onClick() {
  updateLabel();
}

function updateLabel() {
  var introduction = getIntroduction();
  var completeName = getCompleteName();
  var completeIntroduction = introduction + completeName;
  label.textContent = completeIntroduction;
}

function getIntroduction() {
  return 'Mi nombre es ';
}

function getCompleteName() {
  var completeName = getSurname() + ', ' + getFirstname();
  return completeName;
}

function getSurname() {
  return 'Wade';
}

function getFirstname() {
  return 'Facundo';
}
