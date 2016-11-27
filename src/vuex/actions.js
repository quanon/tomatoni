import { TICK, SET_TIMER, CLEAR_TIMER } from './mutation_types';

export default {
  start({ commit, state }) {
    const timer = setInterval(() => {
      commit(TICK);

      if (state.time === '00:00') {
        commit(CLEAR_TIMER);
      }
    }, 1000);

    commit(CLEAR_TIMER);
    commit(SET_TIMER, { timer });
  }
};
