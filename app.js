var Piano = /** @class */ (function () {
    function Piano(WHITE_KEYS, BLACK_KEYS, white_keys, black_keys, keys) {
        this.WHITE_KEYS = WHITE_KEYS;
        this.BLACK_KEYS = BLACK_KEYS;
        this.white_keys = white_keys;
        this.black_keys = black_keys;
        this.keys = keys;
    }
    // mouse click playSound event
    Piano.prototype.mouseEvent = function () {
        var _this = this;
        this.keys.forEach(function (key) {
            key.addEventListener('mousedown', function () { return _this.playSound(key); });
        });
    };
    // keyboard press playSound event
    Piano.prototype.keaboardEvent = function () {
        var _this = this;
        document.addEventListener('keydown', function (e) {
            //avoid multiply sounds with one press
            if (e.repeat)
                return;
            //find key in white or black keys
            for (var i = 0; i < _this.WHITE_KEYS.length; i++) {
                if (_this.WHITE_KEYS[i] === e.key)
                    _this.playSound(_this.white_keys[i]);
            }
            for (var i = 0; i < _this.BLACK_KEYS.length; i++) {
                if (_this.BLACK_KEYS[i] === e.key)
                    _this.playSound(_this.black_keys[i]);
            }
        });
    };
    //Play sound method
    Piano.prototype.playSound = function (e) {
        var audio = new Audio("./notes/" + e.dataset.note + ".mp3");
        audio.currentTime = 0;
        audio.play();
        e.classList.add('active');
        setTimeout(function () {
            e.classList.remove('active');
        }, 200);
    };
    return Piano;
}());
//add new instance of Piano class
var piano = new Piano(['z', 'x', 'c', 'v', 'b', 'n', 'm'], ['s', 'd', 'g', 'h', 'j'], document.querySelectorAll('.white'), document.querySelectorAll('.black'), document.querySelectorAll('.key'));
//call of event functions
piano.mouseEvent();
piano.keaboardEvent();
