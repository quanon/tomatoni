import { Howl } from 'howler';
import src from '../assets/media/ringing_clock.mp3';

let sound = null;

export default {
  play() {
    sound = new Howl({
      src: [src],
      volume: 0.5
    });

    sound.play();
  },

  stop() {
    if (!sound) return;

    sound.stop();
    sound = null;
  }
};
