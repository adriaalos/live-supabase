<script setup lang="ts">
const props = defineProps({
    as: {
        type: String,
        default: 'div'
    },
    padding: {
        type: String,
        default: 'lg'
    },
    borderSize: {
        type: String,
        default: '1'
    },
    borderColor: {
        type: String,
        default: 'light'
    },
    bgColor: {
        type: String,
        default: 'transparent'
    },
    bgOpacity: {
        type: String || null,
        default: null
    },
    rounded: {
        type: String,
        default: 'lg'
    },
    shadow: {
        type: String,
        default: 'md'
    },
})

const padding = computed(() => {
    return props.padding == 'sm' ? 'p-3'
        : props.padding == 'md' ? 'p-6'
        : props.padding == 'lg' ? 'p-9'
        : props.padding == 'xl' ? 'p-12'
        : props.padding == '2xl' ? 'p-16'
        : props.padding == '3xl' ? 'p-20'
        : props.padding == '4xl' ? 'p-28'
        : props.padding == '5xl' ? 'p-40'
        : props.padding == '6xl' ? 'p-60'
        : props.padding == '7xl' ? 'p-96'
        : props.padding
})
const borderSize = computed(() => {
    return props.borderSize == '1' ? 'border'
        : props.borderSize == '2' ? 'border-2'
        : props.borderSize == '4' ? 'border-4'
        : props.borderSize == '8' ? 'border-8'
        : props.borderSize
})
const borderColor = computed(() => {
    return props.borderColor == 'lightest' ? 'border-gray-100'
        : props.borderColor == 'lighter' ? 'border-gray-200'
        : props.borderColor == 'light' ? 'border-gray-300'
        : props.borderColor == 'dark' ? 'border-gray-500'
        : props.borderColor == 'darker' ? 'border-gray-700'
        : props.borderColor == 'darkest' ? 'border-gray-900'
        : props.borderColor == 'black' ? 'border-black'
        : props.borderColor == 'white' ? 'border-white'
        : props.borderColor
})
const bgColor = computed(() => {
    return props.bgColor == 'transparent' ? 'bg-transparent'
        : props.bgColor == 'white' ? 'bg-white'
        : props.bgColor == 'black' ? 'bg-black'
        : props.bgColor == 'primary' ? 'bg-primary'
        : props.bgColor == 'secondary' ? 'bg-secondary'
        : props.bgColor
})
const bgOpacity = computed(() => {
    if(props.bgOpacity) return props.bgOpacity
})
const rounded = computed(() => {
    return props.rounded == 'sm' ? 'rounded-sm'
        : props.rounded == 'md' ? 'rounded-md'
        : props.rounded == 'lg' ? 'rounded-lg'
        : props.rounded == 'xl' ? 'rounded-xl'
        : props.rounded == '2xl' ? 'rounded-2xl'
        : props.rounded == '3xl' ? 'rounded-3xl'
        : props.rounded == 'full' ? 'rounded-full'
        : props.rounded
})
const shadow = computed(() => {
    return props.shadow == 'sm' ? 'shadow-sm'
        : props.shadow == 'md' ? 'shadow-md'
        : props.shadow == 'lg' ? 'shadow-lg'
        : props.shadow == 'xl' ? 'shadow-xl'
        : props.shadow == '2xl' ? 'shadow-2xl'
        : props.shadow == 'inner' ? 'shadow-inner'
        : props.shadow == 'none' ? 'shadow-none'
        : props.shadow
})
</script>
<template>
    <component 
        :is="props.as" 
        :class="[padding, borderSize, borderColor, bgColor, bgOpacity, rounded, shadow]">
        <slot/>
    </component>
</template>