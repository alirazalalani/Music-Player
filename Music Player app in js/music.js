const play=document.getElementById('play');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const music=document.querySelector('audio');
const img=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');



const songs=[
    {
        name:"AFSANAY YUNUS",
        title:"Afsanay",
        artist:"Talha Yunus",
        images:'yunus',
    },
{

    name:"iltija",
    title:"Iltija",
    artist:"Jokhay",
    images:'jhokhay',
},

{
    name:"AFSANY ANJUM",
    title:"Afsanay",
    artist:"Talha Anjum",
    images:'talha',
},
{
    name:"galat fehmi asim",
    title:"Galat Fehmi",
    artist:"Asim Azhar",
    images:'asim',
},
{
    name:"gardish jhokay",
    title:"Gardish",
    artist:"Jokhay",
    images:'jhokhay',
},
{
    name:"QURANTINE YUNUS",
    title:"Qurantine",
    artist:"Talha Yunus",
    images:'yunus',
},
{
    name:"YAAD ANJUM",
    title:"Yaad",
    artist:"Talha Anjum",
    images:'talha',
},
{
    name:"YAAD ASIM",
    title:"Yaad",
    artist:"Asim Azhar",
    images:'asim',
},
];

let isPlaying=false;



//for play functionality
const playMusic=()=>
{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add('anime');
    
};



//for pause functionality

const pauseMusic=()=>
{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove('anime');
    
};


play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();         
    // }else{
    //     playMusic();
    // }
    isPlaying?pauseMusic():playMusic();
});



//changin title img song

const loadSong=(songs)=>{
title.textContent=songs.title;
artist.textContent=songs.artist;
music.src="music/"+songs.name+".mp3";
img.src="img/"+songs.images+".jpg";
}

let count=0;



const nextSong = () => {
       
    loadSong(songs[count]);
    count=(count+1)%songs.length; 
    playMusic();
    
}
next.addEventListener('click',nextSong);
// loadSong(songs[4]);
prev.addEventListener('click',prevSong);
function prevSong(){
    count=(count-1 +songs.length)%songs.length;
    loadSong(songs[count]);
    playMusic();
}