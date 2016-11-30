<template lang="pug">
  #app
    main.ui.middle.aligned.grid
      .row
        .center.aligned.column
          time-menu
      .row
        .center.aligned.column
          timer
          timer-button
      .row
</template>

<script>
import Timer from './components/Timer';
import TimeMenu from './components/TimeMenu';
import TimerButton from './components/TimerButton';

export default {
  components: {
    TimeMenu,
    Timer,
    TimerButton
  }
};
</script>

<style lang="scss" scoped>
#app {
    padding: 1.0rem;
}
</style>
