const WHITE_KEYS: String[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS: String[] = ['s', 'd', 'g', 'h', 'j'];
const white_keys: NodeListOf<Element> = document.querySelectorAll('.white');
const black_keys: NodeListOf<Element> = document.querySelectorAll('.black');

const keys: NodeListOf<Element> = document.querySelectorAll('.key');

// mouse click playSound event
keys.forEach((key: Element) => {
  key.addEventListener('mousedown', (): void => playSound(key));
});

// keyboard press playSound event
document.addEventListener('keydown', e => {
  //avoid multiply sounds with one press
  if (e.repeat) return;

  //find key in white or black keys
  for (let i = 0; i < WHITE_KEYS.length; i++) {
    if (WHITE_KEYS[i] === e.key) playSound(white_keys[i]);
  }
  for (let i = 0; i < BLACK_KEYS.length; i++) {
    if (BLACK_KEYS[i] === e.key) {
      playSound(black_keys[i]);
    }
  }
});

//Play sound function
const playSound = (e: any): void => {
  let audio = new Audio(`./notes/${e.dataset.note}.mp3`);
  audio.currentTime = 0;
  audio.play();
  e.classList.add('active');
  setTimeout(() => {
    e.classList.remove('active');
  }, 200);
};
