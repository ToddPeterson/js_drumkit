const keys = document.querySelectorAll('.key');

function playAudio(e) {
    const audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
    const key = document.querySelector(`.key[key-data="${e.keyCode}"]`);
    if (!audio) return; // Unmapped key, do nothing
    audio.currentTime = 0; // in case it's still playing from last input
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
