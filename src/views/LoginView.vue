<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import RegisterView from '../components/Register.vue'
  import axios from 'axios'
  const users = ([])
  const form = ref({
    username: "",
    password: "",
  })

  const router = useRouter()
  const emit = defineEmits('login-requested')

  const init = onMounted(async () => {
    await axios
    .get('http://localhost:8085/users')
    .then(response => {users.value = response.data})
    console.log(users.value)
  })

  function verifyUser(form){
    var verified = false;
    users.value.forEach(function(user) {
      if (user.username == form.username && user.password == form.password) {
        alert('Login Successful!')
        router.push('/home/'+user.id)
        emit('login',user.id)
        verified = true
      }
    });

    if (!verified) {
      alert('Login Information is Incorrect!')
    }
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
      <button type="button" class="btn btn-primary" @click="verifyUser(form)">Submit</button>
      <div class="alternative-option mt-4"> 
        <p>
          First time here?
          <button class="btn btn-primary" type="button" data-toggle="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Make an account!
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <RegisterView />
        </div>
      </div>
    </form>
  </div>
</template>
