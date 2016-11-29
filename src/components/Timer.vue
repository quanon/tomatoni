<template>
  <div class="time">
    {{ time }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'time'
    ])
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables';

.time {
  font-size: 10.0rem;
  line-height: 10.0rem;
  margin-bottom: 1.0rem;
  color: #821400;

  @media screen and (max-width: $tablet-breakpoint) {
    font-size: 7.5rem;
    line-height: 7.5rem;
  }
}
</style>
