<template lang="pug">
  a.item(:class='cls' @click='$emit("click")')
    img(:src='src')
</template>

<script>
import $ from 'jquery';
import emojione from 'emojione';

export default {
  props: ['isActive', 'emoji'],
  computed: {
    cls() {
      return this.isActive() ? 'active' : '';
    },
    src() {
      return $(emojione.toImage(this.emoji)).prop('src');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/colors';
@import '../assets/stylesheets/modular-scale';
@import '../assets/stylesheets/variables';

.item,
.item::before {
  background-color: tint($tomato, 85%) !important;
}

.item {
  border-color: tint($tomato, 85%) !important;
  padding-left: 5.0rem !important;
  padding-right: 5.0rem !important;

  @media screen and (max-width: $tablet-breakpoint) {
    padding-left: modular-scale(-1, 5.0rem) !important;
    padding-right: modular-scale(-1, 5.0rem) !important;
  }

  img {
    filter: contrast(0);
  }

  &.active {
    background-color: tint($tomato, 75%) !important;

    img {
      filter: none;
    }
  }
}
</style>
