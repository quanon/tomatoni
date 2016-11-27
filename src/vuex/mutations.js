/* eslint-disable no-param-reassign */
import moment from 'moment';

export default {
  tick(state) {
    state.time =
      moment(state.time, 'mm:ss')
        .subtract(1, 'second')
        .format('mm:ss');
  }
};
