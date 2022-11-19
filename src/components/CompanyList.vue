<script setup>
    import axios from 'axios';
    import {ref, onMounted} from 'vue'

    


    const companies = ref(null)

    onMounted(async () => {
        await axios
        .get('http://localhost:8085/company/')
        .then(response => {
            companies.value = response.data
        })
        console.log(companies);
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
                <tr v-for="company in companies" :company="company">

                    <td>{{company.make}}</td>
                    <td>{{company.country}}</td>
                    <td>{{company.yearFounded}}</td>
                    <td>{{company.hq}}</td>
                    <td>
                    <img 
                    :src="company.logoURL" 
                    alt="Image of {{company.make}}" 
                    class="w-25 p-3">
                    </td>

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

