<template lang="pug">
  #app
    config-button
    main.ui.middle.aligned.grid
      .row
        .center.aligned.column
          time-menu
      .row
        .center.aligned.column
          timer
          timer-button.timer-button
      .row
        .center.aligned.column
          stocked
</template>

<script>
import $ from 'jquery';
import Timer from './components/Timer';
import TimeMenu from './components/TimeMenu';
import TimerButton from './components/TimerButton';
import Stocked from './components/Stocked';
import ConfigButton from './components/ConfigButton';

const ENTER = 13;

$('body').keypress((e) => {
  if (e.which === ENTER) {
    $('.timer-button').click();
  }
});

export default {
  components: {
    TimeMenu,
    Timer,
    TimerButton,
    Stocked,
    ConfigButton
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding: 1.0rem;
}
</style>
