
const audioPlayer = document.getElementById('audio-player');
const dots = document.querySelectorAll('.dot');


dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const audioSrc = dot.getAttribute('data-audio');
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    });

    dot.addEventListener('mouseleave', function() {
        audioPlayer.pause();  
    });
});
