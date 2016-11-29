<template>
  <div id="app">
    <navbar></navbar>
    <main class="ui middle aligned grid">
      <div class="row">
        <div class="center aligned column">
          <time-menu class="time-menu"></time-menu>
          <timer></timer>
          <timer-button class="timer-button"></timer-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TimeMenu from './components/TimeMenu';
import TimerButton from './components/TimerButton';

export default {
  components: {
    Navbar,
    TimeMenu,
    Timer,
    TimerButton
  }
};
</script>

<style>
html {
  font-size: 62.5%;
}

html, body, #app {
  height: 100%;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  background-color: #fff9f8;
}

main {
  height: 100%;
}

.icon-button {
  color: #821400;
  cursor: pointer;
}

.icon-button.disabled {
  cursor: not-allowed;;
}

.time-menu {
  margin-bottom: 5.0rem !important;
}

.timer-button {
  padding-bottom: 10.0rem !important;
}
</style>
