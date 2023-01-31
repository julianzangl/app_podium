<template>
  <div id="vuePodlet">
    <Dashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
#vuePodlet {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
