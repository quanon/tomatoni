<template>
  <i class="play huge icon" @click="start"></i>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions([
    'start'
  ])
};
</script>

<style scoped>
.icon {
  color: #821400;
  cursor: pointer;
}
</style>
