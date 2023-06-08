<script setup lang="ts">
const props = defineProps({
    as: {
        type: String,
        default: 'div'
    },
    width: {
        type: String || null,
        default: null
    },
    height: {
        type: String || null,
        default: null
    }
})

const height = computed(() => {
    if (props.height) return props.height
})
const width = computed(() => {
    if (props.width) return props.width
})

</script>
<template>
    <component :is="as" :class="[height, 'flex items-center justify-center']">
        <slot/>
    </component>
</template>