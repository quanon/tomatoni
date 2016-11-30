<template lang="pug">
  .ui.compact.menu
    time-menu-item(
      v-for='item in items'
      v-bind:emoji='item.emoji'
      v-bind:isActive='item.isActive'
      @click='item.onClick'
    )
</template>

<script>
import ActionTypes from '../vuex/action_types';
import TimeMenuItem from './TimeMenuItem';

export default {
  components: {
    TimeMenuItem
  },
  data() {
    const store = this.$store;

    return {
      items: [{
        emoji: ':tomato:',
        isActive() {
          return store.getters.isPomodoro;
        },
        onClick() {
          store.dispatch(ActionTypes.SELECT_POMODORO);
          store.dispatch(ActionTypes.RESET);
        }
      }, {
        emoji: ':coffee:',
        isActive() {
          return store.getters.isShortBreak;
        },
        onClick() {
          store.dispatch(ActionTypes.SELECT_SHORT_BREAK);
          store.dispatch(ActionTypes.RESET);
        }
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #ffe8e4 !important;
  border-color: #ffe8e4 !important;
  box-shadow: none !important;
}
</style>
