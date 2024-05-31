<template>
    <div>
        <b-container>
            <b-row v-if="isRefresh">
                <b-col cols="4">
                    <TrafficStopComponent/>
                </b-col>
                <b-col align-self="center" class="text-center" cols="4">
                    <b-button class="" size="lg" variant="secondary">Refresh</b-button>
                </b-col>
                <b-col cols="4">
                    <TrafficStopComponent/>
                </b-col>
            </b-row>
            <b-row v-else>
                <b-col cols="4">
                    <TrafficStopComponent/>
                </b-col>
                <b-col cols="4">
                    <TrafficStopComponent/>
                </b-col>
                <b-col cols="4">
                    <TrafficStopComponent/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import TrafficStopComponent from '../components/TrafficStopComponent'
export default {
    name: "TrafficStopListComponent",
    components: {
        TrafficStopComponent
    },
    props: {
        isRefresh: Boolean
    }
}
</script>