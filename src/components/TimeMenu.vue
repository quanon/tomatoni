<template lang="pug">
  .ui.compact.menu
    time-menu-item(
      v-for='item in items'
      v-bind:emoji='item.emoji'
      v-bind:isActive='item.isActive'
      v-bind:selectMode='item.selectMode'
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
    return {
      items: [{
        emoji: ':tomato:',
        isActive() {
          return this.$store.getters.isPomodoro;
        },
        selectMode() {
          this.$store.dispatch(ActionTypes.SELECT_POMODORO);
          this.$store.dispatch(ActionTypes.RESET);
        }
      }, {
        emoji: ':coffee:',
        isActive() {
          return this.$store.getters.isShortBreak;
        },
        selectMode() {
          this.$store.dispatch(ActionTypes.SELECT_SHORT_BREAK);
          this.$store.dispatch(ActionTypes.RESET);
        }
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables';
@import '../assets/stylesheets/modular-scale';

.menu {
  background-color: #ffe8e4 !important;
  box-shadow: none !important;
  border-color: #ffe8e4 !important;
}
</style>
