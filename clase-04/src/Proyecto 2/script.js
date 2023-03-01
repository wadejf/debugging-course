var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

function onClick() {
  var inputsEmpty = inputsAreEmpty();
  if (inputsEmpty) {
    label.textContent = 'Error: Uno o ambos campos están vacios.';
    return;
  }
  updateLabel();
}

function inputsAreEmpty() {
  return getNumber1() === '' || getNumber2() === '';
}

function updateLabel() {
  try {
    var number1 = Number(getNumber1());
    var number2 = Number(getNumber2());
    var sum = add(number1, number2);
    label.textContent = number1 + ' + ' + number2 + ' = ' + sum;
  } catch (err) {
    console.error(err);
    label.textContent = 'Ocurrió un error al realizar la suma';
  }
}

function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

function add(number1, number2) {
  return number1 + number2;
}
