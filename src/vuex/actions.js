import MutationTypes from './mutation_types';
import ActionTypes from './action_types';

export default {
  [ActionTypes.START]({ commit, getters }) {
    const timer = setInterval(() => {
      commit(MutationTypes.TICK);

      if (getters.isFinished) {
        commit(MutationTypes.CLEAR_TIMER);
      }
    }, 1000);

    commit(MutationTypes.CLEAR_TIMER);
    commit(MutationTypes.SET_TIMER, { timer });
  },

  [ActionTypes.STOP]({ commit }) {
    commit(MutationTypes.CLEAR_TIMER);
  },

  [ActionTypes.RESET]({ commit }) {
    commit(MutationTypes.SET_TIME, { time: '25:00' });
  }
};
