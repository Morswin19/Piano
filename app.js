var WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
var BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
var white_keys = document.querySelectorAll('.white');
var black_keys = document.querySelectorAll('.black');
var keys = document.querySelectorAll('.key');
// mouse click playSound event
keys.forEach(function (key) {
    key.addEventListener('mousedown', function () { return playSound(key); });
});
// keyboard press playSound event
document.addEventListener('keydown', function (e) {
    //avoid multiply sounds with one press
    if (e.repeat)
        return;
    //find key in white or black keys
    for (var i = 0; i < WHITE_KEYS.length; i++) {
        if (WHITE_KEYS[i] === e.key)
            playSound(white_keys[i]);
    }
    for (var i = 0; i < BLACK_KEYS.length; i++) {
        if (BLACK_KEYS[i] === e.key) {
            playSound(black_keys[i]);
        }
    }
});
//Play sound function
var playSound = function (e) {
    var audio = new Audio("./notes/" + e.dataset.note + ".mp3");
    audio.currentTime = 0;
    audio.play();
    e.classList.add('active');
    setTimeout(function () {
        e.classList.remove('active');
    }, 200);
};
