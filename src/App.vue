<script setup>
  import {ref} from 'vue'
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import './assets/main.css'
  import LoginView from './views/LoginView.vue';

  const userId = ref(-1)
  const isAuth = ref(false)

  function setUser(id) {
    userId.value = id

    isAuth.value = true
  }
</script>

<template>
  <div v-if="!isAuth">
    <LoginView @login="setUser" />
  </div>
  <div v-else>
    <Header :userId="userId"/>
    <RouterView />
    <footer class="bg-light mt-5">
      <p class="footer">
        MIE350 Team 7
        <br>Disclaimer: This is not a professional website.
      </p>
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


