import { Howl } from 'howler';
import src from './assets/ringing_clock.mp3';

let sound = null;

export default {
  play() {
    sound = new Howl({
      src: [src]
    });

    sound.play();
  },

  stop() {
    if (!sound) return;

    sound.stop();
    sound = null;
  }
};
