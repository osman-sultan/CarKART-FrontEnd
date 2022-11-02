<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue'

  defineProps({
    review: {
        type: Object, 
        required: true
    }
  })

  const name = ref('Reviews')
  const fields = ref([
    {key: 'review.user.firstName', label: 'First Name', sortable: true},
    {key: 'review.user.lastName', label: 'Last Name', sortable: true},
    {key: 'dateTimeStamp', label: 'Timestamp', sortable: true},
  ],)
  const reviews = ref(null)
  onMounted(async () => {
        await axios
        .get('http://localhost:8085/reviews/') //reviews/id
        .then(response => {
        reviews.value = response.data
        })
  })
</script>

<!--i don't know how to populate the table based on the specific car id~ -->
<template>
  <div>
    
    <!--insert table here-->

    <p> HELP THIS SHOULD BE A TABLE </p>
    {{reviews}}
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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