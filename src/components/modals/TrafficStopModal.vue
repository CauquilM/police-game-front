<template>
    <b-modal ref="traffic-stop-modal" hide-header-close centered hide-footer title="Traffic stop">
        <p>{{ vehicle }}</p>
        <div class="d-flex justify-content-between">
            <div>
                <b-button v-b-toggle.collapse-1 variant="primary">See documents</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                    <b-card header="Insurance card" header-tag="header">
                        <b-card-text>
                            Policy number: 
                            {{ parseInt(Math.random() * (9999 - 1111) + 1111) }}
                            -
                            {{ parseInt(Math.random() * (9999 - 1111) + 1111) }}
                        </b-card-text>
                        <b-card-text>
                            Vehicle Type: {{ vehicle.vehicleType }}
                        </b-card-text>
                        <b-card-text>
                            Expiration date: 
                        </b-card-text>
                    </b-card>
                </b-collapse>
            </div>
            <!-- <b-button variant="primary" @click="freeVehicle()">See driver license</b-button>
            <b-button variant="primary" @click="freeVehicle()">See registration</b-button>
            <b-button variant="primary" @click="freeVehicle()">Free vehicle</b-button> -->
        </div>
    </b-modal>
</template>
<script>
import { eventBus } from "@/main";
export default {
    name: "TrafficStopModal",
    data() {
        return {
            vehicle: {}
        }
    },
    mounted() {
        eventBus.$on('openTrafficStopModal', (vehicle) => {
            this.$refs["traffic-stop-modal"].show();
            this.vehicle = vehicle;
        });
        eventBus.$on('closeTrafficStopModal', () => {
            this.$refs["traffic-stop-modal"].hide();
        });
    },
    methods: {
        freeVehicle() {
            window.location.reload();
        }
    }
}
</script>