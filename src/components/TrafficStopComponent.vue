<template>
    <div>
        <b-card :header="vehicle.licensePlate" header-tag="header" :title="vehicle.vehicleType">
            <b-card-text>Insurance: {{ vehicle.insurance }}</b-card-text>
            <b-card-text>Registration: {{ vehicle.registration }}</b-card-text>
            <b-button variant="primary" @click="trafficStopBegins">Stop vehicle</b-button>
        </b-card>

    </div>
</template>

<script>
import { eventBus } from "@/main";
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
            vehicleFlags: [
                "burn a red light", "broken left front headlight", "expired registration", "overdue oil change",
                "low tire pressure", "windshield wiper malfunction", "faulty brake light", "dirty or obscured license plate",
                "cracked windshield", "missing side mirror", "malfunctioning turn signal",
                "exhaust emitting excessive smoke", "unsecured load or cargo", "parking in a no-parking zone",
                "overdue emissions inspection", "faulty horn", "low coolant level", "loose gas cap",
                "non-functional air conditioning", "faded paint or rust spots", "worn-out windshield wipers",
                "damaged bumper", "loose or missing antenna", "unusual engine noise"
            ],
            vehicle: {
                licensePlate: "",
                vehicleType: "",
                vehicleInventory: [],
                insurance: "",
                registration: ""
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
        randomizer(max) {
            return parseInt(Math.random() * max);
        },

        vehicleInitializer() {
            // License plate
            this.licensePlateInitializer();

            // Vehicle type
            this.vehicle.vehicleType = this.vehicleTypes[this.randomizer(this.vehicleTypes.length)];

            // Vehicle inventory

            // Vehicle insurance
            this.documentInitializer("insurance");

            // Vehicle registration
            this.documentInitializer("registration");

            // Insurance date
            this.generateInsuranceDate();
        },

        licensePlateInitializer() {
            for (let index = 0; index < 3; index++) {
                let random = this.randomizer(26);
                this.vehicle.licensePlate = this.vehicle.licensePlate.concat(this.alphabet[random]);
            }
            this.vehicle.licensePlate = this.vehicle.licensePlate.concat('-');
            for (let index = 0; index < 3; index++) {
                let random = this.randomizer(10);
                this.vehicle.licensePlate = this.vehicle.licensePlate.concat(random);
            }
        },
        documentInitializer(document) {
            const random = this.randomizer(100);
            const insuranceStatus = this.getDocumentStatus(random, "insurance");
            const registrationStatus = this.getDocumentStatus(random, "registration");

            if (document === "insurance") {
                this.vehicle.insurance = insuranceStatus;
            } else if (document === "registration") {
                this.vehicle.registration = registrationStatus;
            }
        },
        getDocumentStatus(random, documentType) {
            const EXPIRED_PROBABILITY = 10;
            const NO_DOCUMENT_PROBABILITY = 5;

            if (random <= EXPIRED_PROBABILITY) {
                return "Expired";
            } else if (random <= EXPIRED_PROBABILITY + NO_DOCUMENT_PROBABILITY) {
                return "No " + documentType;
            } else {
                return "Valid";
            }
        },
        generateInsuranceDate() {
            // Get the current date
            const currentDate = new Date();

            // Generate a random number of days to add (e.g., up to 365 days in the future)
            const randomDaysToAdd = Math.floor(Math.random() * 365) + 1;

            // Calculate the future date
            const futureDate = new Date(currentDate);
            if (this.vehicle.insurance == "Expired") {
                futureDate.setDate(currentDate.getDate() - randomDaysToAdd);
            }
            else if (this.vehicle.insurance == "No insurance") {
                return 
            }

            // Format the date to yyyy-mm-dd
            const year = futureDate.getFullYear();
            const month = String(futureDate.getMonth() + 1).padStart(2, '0');
            const day = String(futureDate.getDate()).padStart(2, '0');

            console.log(`date ${day}-${month}-${year}`);
        },
        trafficStopBegins() {
            eventBus.$emit('openTrafficStopModal', this.vehicle);
        },
    }
}
</script>