export default {
  time(state) {
    return state.time;
  },

  isActive(state) {
    return !!state.timerId;
  },

  isFinished(state) {
    return state.time === '00:00';
  }
};
