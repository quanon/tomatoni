import MutationTypes from './mutation_types';
import ActionTypes from './action_types';
import Config from '../config';
import sound from '../sound';

let ticktackId = null;

export default {
  [ActionTypes.START]({ commit, getters }) {
    const ticktack = () => {
      if (!getters.isActive) {
        clearInterval(ticktackId);
        return;
      }
      if (getters.isFinished) {
        commit(MutationTypes.STOP);
        sound.play();
        clearInterval(ticktackId);
        return;
      }

      commit(MutationTypes.TICK);
    };

    commit(MutationTypes.START);
    ticktackId = setInterval(ticktack, 1000);
  },

  [ActionTypes.STOP]({ commit }) {
    clearInterval(ticktackId);
    commit(MutationTypes.STOP);
  },

  [ActionTypes.RESET]({ commit }) {
    commit(MutationTypes.STOP);
    commit(MutationTypes.SET_TIME, { time: Config.DEFAULT_TIME });
    sound.stop();
  }
};
