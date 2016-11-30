<template lang="pug">
  .ui.statistics
    .statistic
      .value
        img.ui.inline.image(:src='src')
        | {{ stocked }}
      .label
        | tomatos
</template>

<script>
import $ from 'jquery';
import emojione from 'emojione';

export default {
  computed: {
    stocked() {
      return this.$store.getters.stocked;
    },
    src() {
      return $(emojione.toImage(':tomato:')).prop('src');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/colors';

.statistics {
  justify-content: center;
}

.statistic {
  .value,
  .label {
    color: shade($tomato, 20%) !important;
  }

  img {
    margin-right: 0.2rem;
  }
}
</style>
