<script setup lang="ts">
const props = defineProps({
    as: {
        type: String,
        default: 'div'
    },
    shadow: {
        type: String,
        default: 'shadow-xl'
    },
    px: {
        type: String || null,
        default: 'px-6'
    },
    py: {
        type: String || null,
        default: 'py-6'
    },
    borderSize: {
        type: String || null,
        default: 'border'
    },
    borderColor: {
        type: String || null,
        default: 'border-gray-300'
    },
    rounded: {
        type: String || null,
        default: null
    },
})

const rounded = computed(() => {
    return props.rounded == null ? 'rounded-xl'
        : props.rounded == 'big' ? 'rounded-3xl'
        : props.rounded
    
})

</script>
<template>
    <component :is="props.as" :class="[props.shadow, props.px, props.borderSize, props.borderColor, rounded]">
        <slot/>
    </component>
</template>