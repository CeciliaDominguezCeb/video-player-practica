// variables

const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progressbar = document.querySelector("#progress");

// listeners

$play.addEventListener("click", handleClickPlay);
$pause.addEventListener("click", handleClickPause);
$backward.addEventListener("click", handleClickBackward);
$forward.addEventListener("click", handleClickForward);
$video.addEventListener("loadedmetadata", handleVideoLoaded);
$video.addEventListener("timeupdate", handleVideoTimeUpdate);
$progressbar.addEventListener("input", handleInput);

//funcionalidad

function handleClickPlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handleClickPause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleClickBackward() {
  $video.currentTime -= 10;
}

function handleClickForward() {
  $video.currentTime += 10;
}

function handleVideoLoaded() {
  $progressbar.max = $video.duration;
}

function handleVideoTimeUpdate() {
  $progressbar.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progressbar.value;
}
