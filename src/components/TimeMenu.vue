<template lang="pug">
  .ui.compact.menu
    a.item(:class='tomatoClass' @click='onClickTomato()')
      img(:src='tomatoSrc')
    a.item(:class='coffeeClass' @click='onClickCoffee()')
      img(:src='coffeeSrc')
</template>

<script>
import $ from 'jquery';
import emojione from 'emojione';
import ActionTypes from '../vuex/action_types';

export default {
  computed: {
    tomatoClass() {
      return this.$store.getters.isPomodoro ? 'active' : '';
    },
    coffeeClass() {
      return this.$store.getters.isShortBreak ? 'active' : '';
    },
    tomatoSrc() {
      return $(emojione.toImage(':tomato:')).prop('src');
    },
    coffeeSrc() {
      return $(emojione.toImage(':coffee:')).prop('src');
    }
  },
  methods: {
    onClickTomato() {
      this.$store.dispatch(ActionTypes.SELECT_POMODORO);
      this.$store.dispatch(ActionTypes.RESET);
    },
    onClickCoffee() {
      this.$store.dispatch(ActionTypes.SELECT_SHORT_BREAK);
      this.$store.dispatch(ActionTypes.RESET);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables';
@import '../assets/stylesheets/modular-scale';

.menu,
.item,
.item::before {
  background-color: #ffe8e4 !important;
}

.menu {
  box-shadow: none !important;
  border-color: #ffe8e4 !important;
}

.item {
  border-color: #ffe8e4 !important;
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
    background-color: #ffd7d0 !important;

    img {
      filter: none;
    }
  }
}
</style>
