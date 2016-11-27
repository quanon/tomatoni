<template>
  <i class="huge repeat icon icon-button" :class="iconClass" @click="onClick"></i>
</template>

<script>
import ActionTypes from '../vuex/action_types';
import Config from '../config';

export default {
  computed: {
    iconClass() {
      if (this.$store.getters.isActive) return '';
      if (this.$store.getters.time !== Config.DEFAULT_TIME) return '';

      return 'disabled';
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch(ActionTypes.RESET);
    }
  }
};
</script>

<style scoped>
</style>
