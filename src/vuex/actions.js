import $ from 'jquery';
import emojione from 'emojione';
import MutationTypes from './mutation_types';
import ActionTypes from './action_types';
import Config from '../config';
import sound from '../utils/sound';
import Notification from '../utils/notification';

const showNotification = ({ isPomodoro }) => {
  let notification;

  if (isPomodoro) {
    notification = new Notification('Well done 👍', {
      body: 'Take a short break ☕️',
      icon: $(emojione.toImage(':tomato:')).prop('src')
    });
  } else {
    notification = new Notification('Short break finished 😇', {
      body: 'Start the next job',
      icon: $(emojione.toImage(':tomato:')).prop('src')
    });
  }

  notification.show();

  setTimeout(notification.close.bind(notification), 3000);
};

let ticktackId = null;

export default {
  [ActionTypes.START]({ commit, getters }) {
    const ticktack = () => {
      if (!getters.isActive) {
        clearInterval(ticktackId);
        return;
      }

      commit(MutationTypes.TICK);

      if (getters.isFinished) {
        commit(MutationTypes.STOP);
        sound.play();
        showNotification({ isPomodoro: getters.isPomodoro });
        clearInterval(ticktackId);
        return;
      }
    };

    commit(MutationTypes.START);
    ticktackId = setInterval(ticktack, 1000);
  },

  [ActionTypes.STOP]({ commit }) {
    clearInterval(ticktackId);
    commit(MutationTypes.STOP);
  },

  [ActionTypes.RESET]({ commit }) {
    commit(MutationTypes.STOP);
    commit(MutationTypes.RESET);
    sound.stop();
  },

  [ActionTypes.SELECT_POMODORO]({ commit }) {
    commit(MutationTypes.STOP);
    commit(MutationTypes.SET_DEFAULT_TIME, {
      defaultTime: Config.DEFAULT_POMODORO_TIME
    });
  },

  [ActionTypes.SELECT_SHORT_BREAK]({ commit }) {
    commit(MutationTypes.STOP);
    commit(MutationTypes.SET_DEFAULT_TIME, {
      defaultTime: Config.DEFAULT_SHORT_BREAK_TIME
    });
  }
};
