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
    let lane = document.createElement('li');
    track.appendChild(lane);
}

// 2. Create an array that displays the progression of the frog during the race

let progressionBar =[];



// 3. Create span and add it to the li <- THESE ARE THE FROGS (?)

// 4. Assign an id to each lane
