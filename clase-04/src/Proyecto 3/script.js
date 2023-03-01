var personsDiv = document.getElementById('personsDiv');
var middleAgeButton = document.getElementById('middleAgeButton');
middleAgeButton.addEventListener('click', middleAgeFilter);

function filterByAge(min, max) {
  personsDiv.innerHTML = '';
  for (i = 0; i < persons.length; i++) {
    var person = persons[i];
    if (person.age >= min && person.age <= max) {
      var personP = document.createElement("p");
      personP.textContent = person.name;
      personsDiv.appendChild(personP);
    }
  }
  personsDiv.setAttribute('min', min);
  personsDiv.setAttribute('max', max);
}

function middleAgeFilter() {
  filterByAge(30, 40);
}
