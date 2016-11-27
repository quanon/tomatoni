<template>
  <nav class="ui borderless fixed menu">
    <div class="ui text container">
      <div class="header item">
        <img class="ui middle aligned mini image" :src=src>
        <span class="title">tomatoni</span>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';
import emojione from 'emojione';

export default {
  computed: {
    src() {
      return $(emojione.toImage(':tomato:')).prop('src');
    }
  }
};
</script>

<style scoped>
nav.ui.menu {
  background-color: #ffe8e4;
}

.title {
  font-size: 1.4rem;
  margin-left: 0.5rem;
  color: #821400;
}
</style>
