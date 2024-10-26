const audioPlayer = document.getElementById('audio-player');
const dots = document.querySelectorAll('.dot');
const keyAudioMap = {};
let currentKey = null;  

dots.forEach(dot => {
    const audioSrc = dot.getAttribute('data-audio');
    const char = dot.getAttribute('data-char').toUpperCase();
    keyAudioMap[char] = audioSrc;
});


document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    
    if (keyAudioMap[key] && currentKey !== key) {  /
        audioPlayer.src = keyAudioMap[key];
        audioPlayer.play();
        currentKey = key;  
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase();
    
    if (key === currentKey) {  
        audioPlayer.pause();
        audioPlayer.currentTime = 0;  
        currentKey = null;  
    }
});
