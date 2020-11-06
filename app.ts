class Piano {
  constructor(
    private WHITE_KEYS: String[],
    private BLACK_KEYS: String[],
    private white_keys: NodeListOf<Element>,
    private black_keys: NodeListOf<Element>,
    private keys: NodeListOf<Element>
  ) {}

  // mouse click playSound event
  mouseEvent() {
    this.keys.forEach((key: Element) => {
      key.addEventListener('mousedown', (): void => this.playSound(key));
    });
  }

  // keyboard press playSound event
  keaboardEvent() {
    document.addEventListener('keydown', e => {
      //avoid multiply sounds with one press
      if (e.repeat) return;
      //find key in white or black keys
      for (let i = 0; i < this.WHITE_KEYS.length; i++) {
        if (this.WHITE_KEYS[i] === e.key) this.playSound(this.white_keys[i]);
      }
      for (let i = 0; i < this.BLACK_KEYS.length; i++) {
        if (this.BLACK_KEYS[i] === e.key) this.playSound(this.black_keys[i]);
      }
    });
  }

  //Play sound method
  playSound(e: any): void {
    let audio = new Audio(`./notes/${e.dataset.note}.mp3`);
    audio.currentTime = 0;
    audio.play();
    e.classList.add('active');
    setTimeout(() => {
      e.classList.remove('active');
    }, 200);
  }
}

//add new instance of Piano class
const piano = new Piano(
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['s', 'd', 'g', 'h', 'j'],
  document.querySelectorAll('.white'),
  document.querySelectorAll('.black'),
  document.querySelectorAll('.key')
);

//call of event functions
piano.mouseEvent();
piano.keaboardEvent();
