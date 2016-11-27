export default {
  time(state) {
    return state.time;
  },

  isActive(state) {
    return !!state.timer;
  },

  isFinished(state) {
    return state.time === '00:00';
  }
};
