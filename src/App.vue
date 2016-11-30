<template>
  <div id="app">
    <main class="ui middle aligned grid">
      <div class="row">
        <div class="center aligned column">
          <time-menu class="time-menu"></time-menu>
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
          <timer></timer>
          <timer-button class="timer-button"></timer-button>
        </div>
      </div>
      <div class="row">
      </div>
    </main>
  </div>
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
