<script setup>
const props = defineProps({
    label: {
        type: String,
        default: null
    },
    required: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <label v-if="props.label"><span>{{ props.label }}</span></label>
    <slot/>
</template>