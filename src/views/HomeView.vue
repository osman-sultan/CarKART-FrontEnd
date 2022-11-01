<script>
  import axios from 'axios';
  import HelloWorld from '../components/HelloWorld.vue'
  import CarCardDisplay from '../components/CarCardDisplay.vue'
  import KeywordSearch from '../components/KeywordSearch.vue'
  import CreateListing from '../components/CreateListing.vue';

  export default{
    name: 'Cars',
    data () {
      return {
        cars: null,
        fields: [
          {key: 'id', label: 'id', sortable: true},
          {key: 'company.make', label: 'make', sortable: true},
          {key: 'model', label: 'model', sortable: false},
          {key:'releaseYear', label: 'releaseYear', sortable: true},
          {key: 'fuelType', label: 'fuelType', sortable: false},
          {key: 'price', label: 'price', sortable: true},
          {key: 'vehicleType', label: 'vehicleType', sortable: false},
          {key: 'hp', label: 'hp', sortable: true},
          {key: 'mileage', label: 'mileage', sortable: true},
          {key: 'colour', label: 'colour', sortable: false},
          {key: 'transmission', label: 'transmission', sortable: false},
        ],
        form: {
          id: '',
          company: '',
          model: '',
          releaseYear: '',
          fuelType: '',
          price: '',
          vehicleType: '',
          hp: '',
          mileage: '',
          colour: '',
          transmission: '',
        },
      }
    },
    mounted () {
      axios
        .get('http://localhost:8085/cars')
        .then(response => (this.cars = response.data))
    },
    components:{
      CreateListing,
      CarCardDisplay,
    },
  }
</script>

<template>
  <main>
    {{ cars }}
    <CreateListing />
    <CarCardDisplay />
  </main>
</template>
    

