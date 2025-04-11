//############################################################################
//MAIN
//############################################################################
let rimaningTime = 5;
const countdownManagement = document.getElementById("countdown");
const numberListEl = document.querySelectorAll("#numbers-list li");
const randomNumbers = Math.floor(Math.random() * 50) + 1;

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
  }
}, 1000);

numberListEl.forEach((li) => {
  li.innerHTML += randomNumbers;
});
