window.addEventListener('keydown', function(event) {   
  const audio = document.getElementById(`${event.keyCode}`);
  const key = document.querySelector(`div.key[data-key = '${event.keyCode}']`);

  console.log(audio);

  if (!audio) return;
  audio.currentTime = 0; //rewind to the beginning
  audio.play();
  key.classList.add("playing");
  setTimeout(function() {key.classList.remove("playing")}, 100);
});



