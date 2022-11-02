<script setup>
    import { ref } from 'vue'
    const applyFilter = ref(false)
</script>

<template>
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="applyFilter">
    <label class="form-check-label" for="flexCheckDefault">
        Sedan
    </label>
    {{ applyFilter }}
</div>
</template>