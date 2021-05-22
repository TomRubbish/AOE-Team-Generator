
var generateBtn = document.querySelector('.randomize-btn');
var resetBtn = document.querySelector('.reset');
var muteBtn = document.querySelector('.play-mute');

var meganTeam = document.querySelector('.megan-team');
var jamesTeam = document.querySelector('.james-team');

var timeToDuel = document.querySelector('.duel');
var chillMusic = document.querySelector('.another-walk');
var playOrMute = 0;

var clickCounter = 0;

let array1 = [
    ['megan'],
    ['james']
];

var zeroOrOne = 0;
let array2 = [' dad',' chaw',' tom'];
var oneTwoOrThree = 0;







function generateTeams(){
    timeToDuel.play();
    chillMusic.pause();
    chillMusic.currentTime = 0;
    if (clickCounter < 1) {
    clickCounter = clickCounter++;
        for (var n = 0; n < 2; n++){
        zeroOrOne = Math.round(Math.random())
        oneTwoOrThree = Math.floor(Math.random() * array2.length);
        array1[zeroOrOne].push(array2[oneTwoOrThree])
        array2.splice(oneTwoOrThree, 1);
        }
        if (array2.length === 1){
            if (array1[0].length === 3) {
            array1[1].push(array2[0])
            } else if (array1[1].length === 3) {
            array1[0].push(array2[0])
            array2.splice(0,1);
            } else {
            zeroOrOne = Math.round(Math.random());
            array1[zeroOrOne].push(array2[0])
            array2.splice(0,1);
            }
        }
    }
meganTeam.textContent = `Megans Team is: ${array1[0]}`;
jamesTeam.textContent = `James Team is: ${array1[1]}`;
} 

function resetGen() {
    timeToDuel.pause();
    chillMusic.play();
    chillMusic.loop = true;
    timeToDuel.currentTime = 0;
    array1[0].splice(1, array1[0].length)
    array1[1].splice(1, array1[1].length)
    array2 = ['dad','chaw','tom'];
    meganTeam.textContent = `Megans Team is: `;
    jamesTeam.textContent = `James Team is: `
}

function playMute() {
    if (playOrMute === 0 ) {
        chillMusic.play();
        chillMusic.loop = true;
        playOrMute++;
    } else if (playOrMute === 1) {
        chillMusic.pause();
        timeToDuel.currentTime = 0;
        playOrMute--;
    }
    
} 

generateBtn.addEventListener('click', generateTeams);
resetBtn.addEventListener('click', resetGen);
muteBtn.addEventListener('click', playMute)