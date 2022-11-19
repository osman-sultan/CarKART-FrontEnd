<script setup>
    defineProps({
        car: {
            type: Object, 
            required: true
        },
    })

    const emit = defineEmits(['delete-car'])
    function del (id){
        emit('delete-car', id)
    }

</script>

<template>
    <button 
    type="submit" 
    class="btn btn-danger me-1"
    @click="del(car.id)">
        Delete
    </button>
</template>