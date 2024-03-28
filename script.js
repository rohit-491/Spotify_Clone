console.log("hello world");
let songindex=0;
let song_name = document.getElementById('song_name');
let audioElement = new Audio('Songs/1.mp3');
let pause = document.getElementById('pause');
let progressBar = document.getElementById('rangebox');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay =Array.from(document.getElementsByClassName('songItemPlay'));
let song = [
    {songName: "Brown Rang-Yo Yo Honey Sing", filePath: "Songs/1.mp3 ", filePath: "img/brown_rang.jpeg"},
    {songName: "Blue Eyes-Yo Yo Honey Sing", filePath: "Songs/2.mp3 ", filePath: "img/Blue_Eyes.jpeg"},
    {songName: "Desi Kalakar-Yo Yo Honey Sing", filePath: "Songs/3.mp3 ", filePath: "img/Desi_kalakar.jpeg"},
    {songName: "Dheere Dheere-Yo Yo Honey Sing", filePath: "Songs/4.mp3 ", filePath: "img/dheere dheere.jpeg"},
    {songName: "Lungi Dance-Yo Yo Honey Sing", filePath: "Songs/5.mp3 ", filePath: "img/Lungi_dance.jpeg"},
    {songName: "One Bottle Down-Yo Yo Honey Sing", filePath: "Songs/6.mp3 ", filePath: "img/One_bottle_Down.jpeg"},
    {songName: "Kalastar-Yo Yo Honey Sing", filePath: "Songs/7.mp3 ", filePath: "img/Kalastar.jpeg"},
];
songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=song[i].filePath;
})
// audioElement.play();

pause.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        pause.classList.remove('fa-play-circle');
        pause.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        pause.classList.remove('fa-pause-circle')
        pause.classList.add('fa-play-circle');
        gif.style.opacity=0;      
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    rangebox.value = progress;
})

rangebox.addEventListener('change', ()=>{
    audioElement.currentTime = ((rangebox.value*audioElement.duration)/100);
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex+ 1}.mp3`;
        song_name.innerText = song[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        pause.classList.remove('fa-play-circle');
        pause.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    audioElement.src=`songs/${songindex+ 1}.mp3`;
    song_name.innerText = song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    pause.classList.remove('fa-play-circle');
    pause.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src=`songs/${songindex+ 1}.mp3`;
    song_name.innerText = song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    pause.classList.remove('fa-play-circle');
    pause.classList.add('fa-pause-circle');   
})

songItemPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        songItemPlay.classList.remove('fa-play-circle');
        songItemPlay.classList.add('fa-pause-circle');
        console.log("Play");
    }
    else{
        audioElement.pause();
        songItemPlay.classList.add('fa-play-circle');
        songItemPlay.classList.remove('fa-pause-circle');
        console.log("paused");
    }
})
