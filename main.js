const audioPlayer = document.getElementById('audio-player');
const dots = document.querySelectorAll('.dot');
const keyAudioMap = {};
let currentKey = null;

// Hər düymə üçün uyğun musiqi mənbəyini qeyd edirik
dots.forEach(dot => {
    const audioSrc = dot.getAttribute('data-audio');
    const char = dot.getAttribute('data-char').toUpperCase();
    keyAudioMap[char] = audioSrc;
});

// Düymə basıldıqda
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    
    if (keyAudioMap[key] && currentKey !== key) { // Yalnız fərqli bir düyməyə basıldıqda
        audioPlayer.src = keyAudioMap[key];
        audioPlayer.play();
        currentKey = key;  // Hazırda basılan düyməni qeyd edirik
    }
});

// Düymə buraxıldıqda
document.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase();
    
    if (key === currentKey) {  // Əgər basılan hərf buraxılan hərfə bərabərdirsə
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Audio sıfırlanır
        currentKey = null;  // Hazırda basılan düyməni sıfırlayırıq
    }
});
