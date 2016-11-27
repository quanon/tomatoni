import moment from 'moment';

export default {
  time(state) {
    return moment(state.time, 'mm:ss').format('mm:ss');
  }
};
