let currentVolume = 50;
const volumeDisplay = document.getElementById("volume-display");

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const noteRates = {
  "C": 1.00,
  "C#": 1.06,
  "D": 1.12,
  "D#": 1.19,
  "E": 1.26,
  "F": 1.33,
  "F#": 1.41,
  "G": 1.50,
  "G#": 1.59,
  "A": 1.68,
  "A#": 1.78,
  "B": 1.89
};

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.dataset.note;
    const noteIndex = notes.indexOf(note);

    currentVolume = Math.round((noteIndex / (notes.length - 1)) * 100);
    volumeDisplay.textContent = `volume: ${currentVolume}%`;

    const audio = new Audio("piano-c4.mp3");
    audio.volume = currentVolume / 100;
    audio.playbackRate = noteRates[note] || 1.0;
    audio.preservesPitch = false;

    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });
  });
});
