import './style.css';
import './snow.scss';

console.log("Welcome, student! 🧑‍💻");

let audio;
const startStream = () => {
  var audioCtx = new AudioContext();
  audio = new Audio();
  var source = audioCtx.createMediaElementSource(audio);
  source.connect(audioCtx.destination);
  audio.crossOrigin = "anonymous";
  audio.src = "http://ice2.somafm.com/defcon-256-mp3";

  audio.addEventListener(
    "canplaythrough",
    function () {
      console.log("May play now");
      audio.play()
        .then(() => {
          console.log("Playing now!");
        }).catch((e) => {
        console.e(e)
      })
    },
    false
  );
}

let playing = false;
let button = document.getElementById("play");
button.addEventListener("click", async () => {
  if (!playing) {
    button.textContent = "Stop";
    if (audio) {
      audio.play();
    } else {
      startStream();
    }
    playing = true;
  } else {
    if (audio) {
      audio.pause();
    }
    button.textContent = "Play";
    playing = false;
  }
});

