/* eslint-disable no-param-reassign */
import moment from 'moment';
import MutationTypes from './mutation_types';

export default {
  [MutationTypes.TICK](state) {
    state.time =
      moment(state.time, 'mm:ss')
        .subtract(1, 'second')
        .format('mm:ss');
  },

  [MutationTypes.SET_TIME](state, payload) {
    state.time = payload.time;
  },

  [MutationTypes.SET_TIMER_ID](state, payload) {
    state.timerId = payload.timerId;
  },

  [MutationTypes.CLEAR_TIMER](state) {
    if (!state.timerId) return;

    clearInterval(state.timerId);
    state.timerId = null;
  }
};
