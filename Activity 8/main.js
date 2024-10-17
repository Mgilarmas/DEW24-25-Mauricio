document.addEventListener("DOMContentLoaded", function(){
const play = document.querySelector(".play");
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");
const audio = document.getElementById("audioPlayer");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");

const music = [music1, music2, music3];
const track = ["Brasil.ogg", "Colombia.ogg", "Espana.ogg"];
let index = 0;

function changeAudio(){
    audio.src = track[index];
    audio.load();
    pausePlay();
}

function pausePlay()
{
    if(audio.paused){
        audio.play();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
    else{
        audio.pause();
        play.innerHTML = '<i class="fa fa-play"></i>';
    }
}

function goBackward(){
    if(index > 0){
        index -= 1;
        changeAudio();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
    else{
        index = 2;
        changeAudio();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
}

function goForward(){
    if(index < 2){
        index += 1;
        changeAudio();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
    else{
        index = 0;
        changeAudio();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
}

// player.src = track[index];

// play.onclick = function(){
//     if (player.paused){
//         player.play();
//         document.querySelector('.fa.fa-play').classList.replace('fa-play', 'fa-pause');
//     } 
//     else {
//         player.pause();
//         document.querySelector('.fa.fa-play').classList.replace('fa-pause', 'fa-play');
//     }
// }

audio.addEventListener("ended", goForward);

play.addEventListener("click", pausePlay);
backward.addEventListener("click", goBackward);
forward.addEventListener("click", goForward);
});