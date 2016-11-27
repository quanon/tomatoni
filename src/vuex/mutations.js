/* eslint-disable no-param-reassign */
import moment from 'moment';
import { TICK, SET_TIMER, CLEAR_TIMER } from './mutation_types';

export default {
  [TICK](state) {
    state.time =
      moment(state.time, 'mm:ss')
        .subtract(1, 'second')
        .format('mm:ss');
  },

  [SET_TIMER](state, payload) {
    state.timer = payload.timer;
  },

  [CLEAR_TIMER](state) {
    if (!state.timer) return;

    clearInterval(state.timer);
    state.timer = null;
  }
};
