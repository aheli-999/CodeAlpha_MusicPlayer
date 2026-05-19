const songs = [

    {
        name: "song1.mp3",
        title: "Dreams",
        artist: "Artist One"
    },

    {
        name: "song2.mp3",
        title: "Night Drive",
        artist: "Artist Two"
    },

    {
        name: "song3.mp3",
        title: "Skyline",
        artist: "Artist Three"
    }

];

let currentSong = 0;

const audio = document.getElementById("audio");

const title = document.getElementById("title");

const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

let isPlaying = false;

function loadSong(song){

    title.textContent = song.title;

    artist.textContent = song.artist;

    audio.src = "songs/" + song.name;
}

loadSong(songs[currentSong]);

function playPause(){

    if(isPlaying){

        audio.pause();

        playBtn.textContent = "▶";

    } else {

        audio.play();

        playBtn.textContent = "⏸";
    }

    isPlaying = !isPlaying;
}

function nextSong(){

    currentSong++;

    if(currentSong > songs.length - 1){

        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;
}

function prevSong(){

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;
}

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {

    audio.volume = volume.value;
});
