//UI
const video =document.getElementById("video");
const play=document.getElementById('play'),
        stop=document.getElementById('stop'),
        progress=document.getElementById('progress'),
        timestamp=document.getElementById('timestamp');


//Play and Pause video
function togglevideostatus(){
    // pause from video api
    if(video.paused){
        //play() from video api
        video.play();

    }else{
        //pause() from video api
        video.pause();

    }
}
//Update play icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML=`<i class="fa fa-play fa-2x"></i>`;

    }else{
        play.innerHTML=`<i class="fa fa-pause fa-2x"></i>`;
    }
}

//Update Progress and Timestamp
function updateprogress(){
    progress.value = (video.currentTime / video.duration) * 100;


    //get minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins<10){
        min='0'+ String(mins);
    }
    
    let secs = Math.floor(video.currentTime % 60);
    if(secs<10){
        secs='0' + String(secs);
    }


    timestamp.innerText=`${mins}:${secs}`;

}
//Stop Video
function stopvideo(){
    video.currentTime=0;
    video.pause();
}

//setvideo time to progress
function setvideoprogress(){
    video.currentTime= (progress.value * video.duration) /100;

}

    
//Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);


play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);

progress.addEventListener('change',setvideoprogress);



//14 Js CDF WDF 2008