<template>
  <i class="huge icon" :class="iconClass" @click="onClick"></i>
</template>

<script>
import { START, STOP } from '../vuex/action_types';

export default {
  computed: {
    iconClass() {
      if (this.$store.getters.isFinished) return 'repeat';

      return this.$store.getters.isActive ? 'pause' : 'play';
    }
  },
  methods: {
    onClick() {
      // if (this.$store.getters.isFinished) {
      //   this.$store.dispatch(RESET);
      //   return;
      // }
      const action = this.$store.getters.isActive ? STOP : START;

      this.$store.dispatch(action);
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
