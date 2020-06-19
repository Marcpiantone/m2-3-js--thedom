// Make .js create HTML - Recap : 
// 1. grab html section
// 2. create elements in mem
// 3. add content to elements
// 4. appendChild html to include new elements


//Add css to work with html :

const stylesheet = document.createElement('link')
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


// Preset values

const FROGS = 3;
const track = document.getElementById('track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for(i=0;i<FROGS;i++){

    // 2. Create li
    let lane = document.createElement('li');

    // 4. Assign an id to each lane
    lane.id = `lane ${i+1}`;

    // Append new elements to li (lanes)
    track.appendChild(lane);

    //Select randomly frogs from frogStable.js
    let random = Math.floor(Math.random()*5);
    let frog = frogStable[random];

    //3. Create span (<- THESE ARE THE FROGS) and add it to the li
    let contester = document.createElement('span');
    contester.innerHTML = `${frog.name} ${frog.number}`;
    contester.className = `frog`;
    lane.appendChild(contester);

    // // Push the frogs to an array of racers (?)
    // let racers = [];
    // racers.push(frog);

    // // Reset progress of racers
    // racers[lane].progress = 0;
}









