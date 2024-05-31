<template>
  <div>
    <TrafficStopListComponent class="pt-3" />
    <TrafficStopListComponent class="pt-3" :isRefresh="true" />
    <TrafficStopListComponent class="pt-3" />
    <TrafficStopModal />
  </div>
</template>

<script>
import TrafficStopListComponent from '../components/TrafficStopListComponent'
import TrafficStopModal from '../components/modals/TrafficStopModal.vue'
export default {
  name: 'TrafficStopListView',
  components: {
    TrafficStopListComponent, TrafficStopModal

  }
}
</script>
