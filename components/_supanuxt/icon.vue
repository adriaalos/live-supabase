<script setup>
const props = defineProps({
    props: {
        name: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <Icon :name="props.name" />
</template>