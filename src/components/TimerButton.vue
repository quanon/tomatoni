<template>
  <i class="huge icon" :class="iconClass" @click="onClick"></i>
</template>

<script>
import ActionTypes from '../vuex/action_types';

export default {
  computed: {
    iconClass() {
      if (this.$store.getters.isFinished) return 'repeat';

      return this.$store.getters.isActive ? 'pause' : 'play';
    }
  },
  methods: {
    onClick() {
      if (this.$store.getters.isFinished) {
        this.$store.dispatch(ActionTypes.RESET);
        this.$store.dispatch(ActionTypes.START);
        return;
      }

      if (this.$store.getters.isActive) {
        this.$store.dispatch(ActionTypes.STOP);
      } else {
        this.$store.dispatch(ActionTypes.START);
      }
    }
  }
};
</script>

<style scoped>
.icon {
  color: #821400;
  cursor: pointer;
}
</style>
