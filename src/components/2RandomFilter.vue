<script setup>
    import {ref} from 'vue'
    const applyFilter = ref(false)
</script>

<template>
    <section class="dropdown-wrapper">
        <div class="selected-item">
            <span>Select User</span>
        </div>
        <div class="dropdown-popover">
            <input v-model="searchQuery" type="text" placeholder="Search for User"/>
            <div class="options">
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                </ul>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">

</style>