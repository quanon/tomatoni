import { Howl } from 'howler';
import MutationTypes from './mutation_types';
import ActionTypes from './action_types';
import Config from '../config';
import soundSrc from '../assets/sunday_church_ambiance.mp3';

const playSound = () => {
  const sound = new Howl({
    src: [soundSrc]
  });

  sound.play();
  sound.fade(1, 0, 5000);
};


export default {
  [ActionTypes.START]({ commit, getters }) {
    const ticktack = () => {
      if (getters.isFinished) {
        commit(MutationTypes.STOP);
        playSound();
        return;
      }

      if (!getters.isActive) return;

      setTimeout(ticktack, 1000);
      commit(MutationTypes.TICK);
    };

    commit(MutationTypes.START);
    setTimeout(ticktack, 1000);
  },

  [ActionTypes.STOP]({ commit }) {
    commit(MutationTypes.STOP);
  },

  [ActionTypes.RESET]({ commit }) {
    commit(MutationTypes.STOP);
    commit(MutationTypes.SET_TIME, { time: Config.DEFAULT_TIME });
  }
};
