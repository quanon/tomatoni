<template lang="pug">
  .ui.dropdown
    i.large.setting.icon
    .menu(@click='onClick')
      .active.item
        i.trash.icon
        | Reset TOMATOS
</template>

<script>
import $ from 'jquery';
import 'semantic-ui-css/semantic';
import ActionTypes from '../vuex/action_types';

export default {
  mounted() {
    $('.dropdown').dropdown();
  },

  methods: {
    onClick() {
      this.$store.dispatch(ActionTypes.RESET_STOCK);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/colors';

.dropdown {
  z-index: 1;
  color: tint($tomato, 50%);
  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
}

.menu {
  border: tint($tomato, 75%) !important;
  box-shadow: none !important;
}

.item {
  color: shade($tomato, 55%) !important;
  border-radius: 0.3rem;

  &:hover {
    background-color: tint($tomato, 75%) !important;
  }
}
</style>
