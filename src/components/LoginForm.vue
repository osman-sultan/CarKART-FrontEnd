<script setup>
    import { ref } from 'vue';
    defineProps({
        id: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    })

    const form = ref({
      id: "",
      password: ""
    })

</script>