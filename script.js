const playlist = [
  { title: "Bird Song", source: "Bird_song.mp3" },
  { title: "Waterfall song", source: "Waterfall.mp3" },
  // Add more songs here
];

const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const seekBar = document.getElementById("seek-bar");
const playlistElement = document.getElementById("playlist");

// Function to create playlist items
function createPlaylistItem(song) {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => {
    audioPlayer.src = song.source;
    audioPlayer.play();
  });
  return li;
}

// Populate the playlist
playlist.forEach(song => {
  const playlistItem = createPlaylistItem(song);
  playlistElement.appendChild(playlistItem);
});

// Play button event listener
playButton.addEventListener("click", () => {
  audioPlayer.play();
});

// Pause button event listener
pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
});

// Update seek bar as the song plays
audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  seekBar.value = progress;
});

// Seek bar event listener
seekBar.addEventListener("input", () => {
  const seekTime = (seekBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});