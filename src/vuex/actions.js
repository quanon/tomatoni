import { TICK, SET_TIMER, CLEAR_TIMER } from './mutation_types';
import { START, STOP } from './action_types';

export default {
  [START]({ commit, getters }) {
    const timer = setInterval(() => {
      commit(TICK);

      if (getters.isFinished) {
        commit(CLEAR_TIMER);
      }
    }, 1000);

    commit(CLEAR_TIMER);
    commit(SET_TIMER, { timer });
  },

  [STOP]({ commit }) {
    commit(CLEAR_TIMER);
  }
};
