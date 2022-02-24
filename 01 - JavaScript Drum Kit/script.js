const audiosKeysList = [];
document.querySelectorAll("audio").forEach((item) => {
    audiosKeysList.push(item.dataset.key);
});
const playSound = (key) => {
    document.querySelector(`audio[data-key='${key}']`).play();
}
window.onkeypress = (e) => {
   let keyCode = e.key.toUpperCase().charCodeAt(0).toString();
   if(audiosKeysList.includes(keyCode)) {
       playSound(keyCode);
   }
}
