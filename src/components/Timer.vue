<template lang="pug">
  .time {{ time }}
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
@import '../assets/stylesheets/colors';
@import '../assets/stylesheets/modular-scale';
@import '../assets/stylesheets/variables';

.time {
  font-size: modular-scale(8);
  line-height: modular-scale(8);
  margin-bottom: 1.0rem;
  color: shade($tomato, 55%);
  font-weight: bold;

  @media screen and (max-width: $tablet-breakpoint) {
    font-size: modular-scale(7);
    line-height: modular-scale(7);
  }
}
</style>
