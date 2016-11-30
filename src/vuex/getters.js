import Config from '../config';

export default {
  time(state) {
    return state.time;
  },

  isPomodoro(state) {
    return state.defaultTime === Config.DEFAULT_POMODORO_TIME;
  },

  isShortBreak(state) {
    return state.defaultTime === Config.DEFAULT_SHORT_BREAK_TIME;
  },

  isActive(state) {
    return state.isActive;
  },

  isFinished(state) {
    return state.time === '00:00';
  },

  stocked(state) {
    return state.stocked;
  }
};
