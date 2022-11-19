<script>
    import axios from 'axios';
    import {ref, onMounted} from 'vue'

    const company = ref(null)

    onMounted(async () => {
        await axios.get('http://localhost:8085/company/')
        .then(response => {
            company.value = response.data
        })
    })
</script>

<template>

    <div class ="container">
        <h2> Company List </h2>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Country</th>
                    <th scope="col">Year Founded</th>
                    <th scope="col">Headquarters</th>
                    <th scope="col">Logo</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="company in company" :company="company">
                    <td>{{company.make}}</td>
                    <td>{{company.country}}</td>
                    <td>{{company.yearFounded}}</td>
                    <td>{{company.hq}}</td>
                    <td>{{company.logoURL}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped>

h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

</style>

