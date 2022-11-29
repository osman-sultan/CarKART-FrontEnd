<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  const users = ([])
  const form = ref({
    username: "",
    password: "",
  })

  const router = useRouter()
  const nextId = ref(0)

  const init = onMounted(async () => {
    await axios
    .get('http://localhost:8085/users')
    .then(response => {users.value = response.data, nextId.value = (Object.keys(response.data).length > 0) ? response.data[Object.keys(response.data).length - 1].id + 1 : 1})
  })

  async function addUser(form, nextId){
    console.log("Making a registration request")
    await axios
    .post('http://localhost:8085/users', {
      "id": nextId,
      "username": form.username,
      "firstName": form.firstName,
      "lastName": form.lastName,
      "email": form.email,
      "password": form.password,
      "address": form.address,
    })
    .then(response => {[...users.value, response.data]})
    .catch(function (error) {
      console.log(error)
      alert('Registration Unsuccessful!')
    })
    console.log("User Registration request successful")
    console.log(users.value)
    alert('Registration Successful!')
    router.push('/')
    init()

  }
</script>

<template>
  <div class = "container">
    <form>
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label" >Username</label>
        <input type="text" class="form-control" id="exampleInputUsername" v-model="form.username">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
      </div>
      <div class="mb-3">
        <label for="exampleInputFirstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="exampleInputFirstName" v-model="form.firstName">
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="exampleInputLastname" v-model="form.lastName">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email</label>
        <input type="text" class="form-control" id="exampleInputEmail" v-model="form.email">
      </div>
      <div class="mb-3">
        <label for="exampleInputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputAddress" v-model="form.address">
      </div>
      <button type="button" class="btn btn-primary" @click="addUser(form, nextId)">Register</button>
    </form>
  </div>
</template>
  