<template>
  <div id="app">
    <navbar></navbar>
    <main class="ui middle aligned center aligned grid">
      <div class="column">
        <timer></timer>
        <timer-button></timer-button>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TimerButton from './components/TimerButton';

export default {
  components: {
    Navbar, Timer, TimerButton
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
</style>
