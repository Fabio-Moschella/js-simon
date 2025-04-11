//############################################################################
//MAIN
//############################################################################
let rimaningTime = 5;
const countdownManagement = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const formAnswer = document.getElementById("answers-form");
//############################################################################
//FUNCTIONS
//############################################################################

function tempoScaduto() {
  console.log("Tempo scaduto. Indovina i numero.");
}

const thirtySecondIntervalId = setInterval(() => {
  rimaningTime -= 1;
  countdownManagement.innerHTML = rimaningTime;
  console.log(countdownManagement);

  if (rimaningTime === 0) {
    clearInterval(thirtySecondIntervalId);
    tempoScaduto();
    numberListEl.classList.add("d-none");
    formAnswer.classList.replace("d-none", "d-inline-block");
  }
}, 1000);

function addListItemNumbers(iterations) {
  //   let arrayNumber = [];
  for (let i = 0; i < iterations; i++) {
    const listItemEl = document.createElement("li");
    const randomNumbers = Math.floor(Math.random() * 50) + 1;
    listItemEl.innerHTML = randomNumbers;
    numberListEl.appendChild(listItemEl);
  }
}

addListItemNumbers(5);
