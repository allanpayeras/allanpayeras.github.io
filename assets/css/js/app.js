var audio = document.querySelector('audio');
var playButton = document.querySelector('button');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
}