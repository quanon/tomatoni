/* eslint-disable no-param-reassign */
import moment from 'moment';
import MutationTypes from './mutation_types';

export default {
  [MutationTypes.RESET](state) {
    state.time = state.defaultTime;
  },

  [MutationTypes.SET_DEFAULT_TIME](state, payload) {
    state.defaultTime = payload.defaultTime;
  },

  [MutationTypes.TICK](state) {
    state.time =
      moment(state.time, 'mm:ss')
        .subtract(1, 'second')
        .format('mm:ss');
  },

  [MutationTypes.START](state) {
    state.isActive = true;
  },

  [MutationTypes.STOP](state) {
    state.isActive = false;
  },

  [MutationTypes.STOCK](state) {
    state.stocked += 1;
  }
};
