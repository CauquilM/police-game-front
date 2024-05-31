<template>
  <div>
    <TrafficStopListComponent class="pt-3"/>
    <TrafficStopListComponent class="pt-3" :isRefresh="true"/>
    <TrafficStopListComponent class="pt-3"/>
  </div>
</template>

<script>
import TrafficStopListComponent from '../components/TrafficStopListComponent'
export default {
  name: 'TrafficStopListView',
  components: {
    TrafficStopListComponent
  }
}
</script>
