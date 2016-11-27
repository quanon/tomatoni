<template>
  <div class="time">
    {{ time }}
  </div>
</template>

<script>
import moment from 'moment';

const time = moment('2000-01-01 00:25:00');

export default {
  data() {
    return {
      time: time.format('mm:ss')
    };
  }
};
</script>

<style scoped>
.time {
  font-size: 10rem;
  line-height: 10rem;
  margin-bottom: 1.0rem;
  color: #821400;
}
</style>
