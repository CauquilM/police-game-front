<template>
  <div id="app" class="bg-info">
    <div id="game" class="pt-4">
      <TrafficStopView/>
    </div>
  </div>
</template>
<script>
  import TrafficStopView from './views/TrafficStopView.vue'
  export default {
    name: "App",
    components: {
      TrafficStopView
    }
  }
</script>
