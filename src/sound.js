import { Howl } from 'howler';
import src from './assets/sunday_church_ambiance.mp3';

let sound = null;

export default {
  play() {
    sound = new Howl({
      src: [src]
    });

    sound.play();
    sound.fade(1, 0, 5000);
  },

  stop() {
    if (!sound) return;

    sound.stop();
    sound = null;
  }
};
