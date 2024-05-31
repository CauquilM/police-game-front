<template>
    <div>
        <b-card :header="licensePlate" header-tag="header" title="Title">
            <b-card-text>Header and footers using props.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "TrafficStopComponent",
    data() {
        return {
            licensePlate: "",
            alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        }
    },
    mounted() {
        this.licensePlateRandomizer();
    },
    props: {
        isRefresh: Boolean
    },
    methods: {
        licensePlateRandomizer() {
            for (let index = 0; index < 3; index++) {
                let random = parseInt(Math.random() * 26);
                this.licensePlate = this.licensePlate.concat(this.alphabet[random]);
            }
            this.licensePlate = this.licensePlate.concat('-');
            for (let index = 0; index < 3; index++) {
                let random = parseInt(Math.random() * 10);
                this.licensePlate = this.licensePlate.concat(random);
            }
        }
    }
}
</script>