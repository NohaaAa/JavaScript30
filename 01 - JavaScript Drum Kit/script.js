let keys = document.querySelectorAll('.key');
const removePlayingClass = (e) => {
    e.target.classList.remove('playing');
}
const playSound = (e) => {
    let keyCode = e.key.toUpperCase().charCodeAt(0).toString();
    let audio = document.querySelector(`audio[data-key='${keyCode}']`);
    let key = document.querySelector(`.key[data-key='${keyCode}']`);
    if(audio) {
        key.classList.add('playing');
        audio.play();
       audio.currentTime = 0;
    }
}
window.addEventListener('keydown', playSound);
window.addEventListener('transitionend', removePlayingClass)

