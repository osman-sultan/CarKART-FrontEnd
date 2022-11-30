<script setup>
    import { ref } from 'vue';
    defineProps({
        username: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    })

    const form = ref({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: ""
    })
</script>