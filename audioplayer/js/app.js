//UI
const musiccontainer = document.getElementById('music-container');

const audio = document.getElementById('audio');

const title=document.getElementById('title');

const progresscontainer = document.getElementById('progress-container'),
      progress = document.getElementById('progress');

const cover= document.getElementById('cover');

const playbtn= document.getElementById('play');
const prevbtn=document.getElementById('prev');
const nextbtn = document.getElementById('next');

//Song Title
const songs=['sample1','sample2','sample3'];

let songindex = 0;

loadsong(songs[songindex]);

//load song and song title
function loadsong(song){
    title.innerText=song;
    audio.src=`audio/${song}.mp3`;
    cover.src=`img/${song}.jpg`;
}

// Event Listener
playbtn.addEventListener('click',()=>{
    // console.log("heu");

    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

//play song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

//pause song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


// change song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

function previoussong(){
    songindex--;
    if(songindex<0){
        songindex = songs.length-1;

    }
    loadsong(songs[songindex]);
    playsong();
    
}

//next song

function nextsong(){
    songindex++;
    if(songindex>songs.length -1){
        songindex =0;

    }
    loadsong(songs[songindex]);

    playsong();
    
}


function updateprogress(e){
    // progress.style.width = `${(audio.currentTime/audio.duration) * 100 }` + '%';

    const {duration,currentTime} = e.target;
    // console.log(currentTime);
    const progresspercent = (currentTime/duration) * 100;
    progress.style.width = `${progresspercent}` +'%';
}

audio.addEventListener('timeupdate',updateprogress);


function setprogress(e){
    const width = this.clientWidth;
    // console.log(width);
    const clickx= e.offsetX;
    // console.log(clickX);

    const duration = audio.duration;

    audio.currentTime = (clickx /width) * duration;
}

progresscontainer.addEventListener('click',setprogress);


audio.addEventListener('ended' , nextsong);