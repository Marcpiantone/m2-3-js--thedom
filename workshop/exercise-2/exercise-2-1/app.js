// Make .js create HTML - Recap :
// 1. grab html section
// 2. create elements in mem
// 3. add content to elements
// 4. appendChild html to include new elements

//Add css to work with html :

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "styles.css";
document.head.appendChild(stylesheet);

// Preset values

const FROGS = 3;
const track = document.getElementById("track");
const racers = [];

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (i = 0; i < FROGS; i++) {
  //2.1 Create li
  let lane = document.createElement("li");

  //2.1 Assign an id to each lane
  lane.id = `lane ${i + 1}`;

  //2.1 Append new elements to li (lanes)
  track.appendChild(lane);

  //2.2 Select randomly frogs from frogStable.js
  let random = Math.floor(Math.random() * 5);
  let frog = frogStable[random];

  //2.1 Create span (<- THESE ARE THE FROGS) and add it to the li
  let contester = document.createElement("span");
  contester.innerHTML = `${frog.name} ${frog.number}`;
  contester.style.background = `${frog.color}`;
  contester.className = `frog`;
  contester.progress = 0;
  contester.jumpStrength = Math.random() * 20 + 5;
  lane.appendChild(contester);
  //console.log("Before put into Racers: ", typeof contester.progress);
  racers.push(contester);
}

let jumpFunction = function () {
  racers.forEach(function (racer) {
    console.log("Racer: ", racer);
    racer.progress += racer.jumpStrength;
    racer.style.left = racer.progress + "%";
    if (racer.progress >= 100) {
      winnerIs(racer);
    }
  });
};

let winnerIs = function (racer) {
  console.log(racer.innerHTML + " has won!");
  racer.style.left = "100%";
  clearInterval(raceTimer);
};

let raceTimer = setInterval(jumpFunction, 1000);
