<template lang="pug">
  i.huge.icon(:class='iconClass' @click='onClick')
</template>

<script>
import $ from 'jquery';
import ActionTypes from '../vuex/action_types';

export default {
  computed: {
    iconClass() {
      if (this.$store.getters.isFinished) return 'repeat';

      return this.$store.getters.isActive ? 'pause' : 'play';
    }
  },
  methods: {
    onClick(e) {
      if ($(e.currentTarget).hasClass('disabled')) return false;

      if (this.$store.getters.isFinished) {
        this.$store.dispatch(ActionTypes.RESET);
        return true;
      }

      if (this.$store.getters.isActive) {
        this.$store.dispatch(ActionTypes.STOP);
      } else {
        this.$store.dispatch(ActionTypes.START);
      }

      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  color: #821400;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }
}
</style>
