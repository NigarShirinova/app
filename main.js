const audioPlayer = document.getElementById('audio-player');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('mousedown', function() {
        const audioSrc = dot.getAttribute('data-audio');
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    });

    dot.addEventListener('mouseup', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; 
    });
});
