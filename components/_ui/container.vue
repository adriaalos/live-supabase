<script setup lang="ts">
const props = defineProps({
    as: {
        type: String,
        default: 'div'
    },
    size: {
        type: String,
        default: 'max-w-7xl'
    },
    px: {
        type: String || null,
        default: 'px-6'
    },
    mx: {
        type: String || null,
        default: 'mx-auto'
    }
})
</script>
<template>
    <component :is="props.as" :class="[props.size, props.px, props.mx]">
        <slot/>
    </component>
</template>