export default {
  tick({ commit }) {
    commit('tick');
  },

  start({ commit, state }) {
    const timer = setInterval(() => {
      commit('tick');

      if (state.time === '00:00') {
        clearInterval(timer);
      }
    }, 1000);
  }
};
