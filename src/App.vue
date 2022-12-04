<script setup>
  import {ref} from 'vue'
  import { RouterView, useRouter} from 'vue-router'
  import Header from './components/Header.vue'
  import './assets/main.css'
  import LoginView from './views/LoginView.vue';

  const userId = ref(-1)
  const isAuth = ref(false)

  const router = useRouter()

  function Login(id) {
    userId.value = id
    isAuth.value = true
  }

  function Logout() {
    isAuth.value = false
    router.push('/')
  }
</script>

<template>
  <div v-if="!isAuth">
    <LoginView @login="Login" />
  </div>
  <div v-else>
    <Header :userId="userId" @logout="Logout"/>
    <RouterView />
    <footer class="p-5 bg-light text-center position-relative">
      <div class="container">
        <p class="footer">
          Copyright &copy; 2022 MIE350 Team 7
          <br>Disclaimer: This is a mock application and is currently not intended for official use
        </p>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
  .footer {
    position: bottom;
    padding-top: 20px;
    padding-bottom: 16px;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>


