<template>
    <div>
        <b-card :header="vehicle.licensePlate" header-tag="header" :title="vehicle.vehicleType">
            <b-card-text>Car {{ vehicle.vehicleType }}</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "TrafficStopComponent",
    data() {
        return {
            alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],   
            vehicleTypes: [
                "Sedan", "SUV", "Coupe", "Convertible", "Minivan", "Pickup Truck",
                "Crossover", "Sports Car", "Luxury Car", "Electric Car", "Hybrid Car", "Diesel Car", "Compact Car",
                "Subcompact Car", "Roadster", "Off-Road Vehicle", "Microcar", "Muscle Car"
            ],
            vehicle: {
                licensePlate: "",
                vehicleType: "",
                vehicleInventory: []
            }
        }
    },
    mounted() {
        this.vehicleInitializer();
    },
    props: {
        isRefresh: Boolean
    },
    methods: {
        vehicleInitializer() {
            for (let index = 0; index < 3; index++) {
                let random = parseInt(Math.random() * 26);
                this.vehicle.licensePlate = this.vehicle.licensePlate.concat(this.alphabet[random]);
            }
            this.vehicle.licensePlate = this.vehicle.licensePlate.concat('-');
            for (let index = 0; index < 3; index++) {
                let random = parseInt(Math.random() * 10);
                this.vehicle.licensePlate = this.vehicle.licensePlate.concat(random);
            }
            this.vehicle.vehicleType = this.vehicleTypes[parseInt(Math.random() * this.vehicleTypes.length)];
        }
    }
}
</script>