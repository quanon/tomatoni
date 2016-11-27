<template>
  <div class="time">
    {{ time }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'time'
  ])
};
</script>

<style scoped>
.time {
  font-size: 10rem;
  line-height: 10rem;
  margin-bottom: 1.0rem;
  color: #821400;
}
</style>
