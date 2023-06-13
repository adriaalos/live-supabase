<script setup>
const props = defineProps({
    as: {
        type: String,
        default: 'button'
    },
    type: {
        type: String,
        default: 'button'
    },
    block: {
        type: Boolean,
        default: false
    },
    justified: {
        type: Boolean,
        default: false
    },
    reversed: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: null
    },
    iconSize: {
        type: String,
        default: null
    },
    loader: {
        type: Boolean,
        default: false
    },
    loaderAbsolute: {
        type: Boolean,
        default: false
    },
    loaderSize: {
        type: String,
        default: null 
    },
    size: {
        type: String,
        default: 'md'
    },
    label: {
        type: String,
        default: null
    },
    variant: {
        type: String,
        default: 'solid'
    },
    color: {
        type: String,
        default: 'primary'
    },
    rounded: {
        type: String,
        default: 'lg'
    },
    shadow: {
        type: String,
        default: null
    },
    transition: {
        type: Boolean,
        default: true
    },
    transitionDuration: {
        type: String,
        default: 'normal'
    },
    transitionType: {
        type: String,
        default: 'opacity'
    }
})

const block = computed(() => {
    return props.block ? 'w-full items-center' : 'inline-flex items-center'
})
const reversed = computed(() => {
    if (props.reversed) return 'flex-row-reverse'
})
const justified = computed(() => {
    return props.justified ? 'justify-between' : 'justify-center'
})
const size = computed(() => {
    return props.size == 'sm' && props.variant != 'link' ? 'px-6 py-3 text-sm'
    : props.size == 'sm' && props.variant == 'link' ? 'text-sm'
    : props.size == 'md' && props.variant != 'link' ? 'px-9 py-3 text-base'
    : props.size == 'md' && props.variant == 'link' ? 'text-base'
    : props.size == 'lg' && props.variant != 'link' ? 'px-12 py-4 text-lg'
    : props.size == 'lg' && props.variant == 'link' ? 'text-lg'
    : props.size == 'xl' && props.variant != 'link' ? 'px-16 py-4 text-xl'
    : props.size == 'xl' && props.variant == 'link' ? 'text-xl'
    : props.size
})
const color = computed(() => {
    return props.color == 'primary' ? 'bg-supanuxt-primary border-supanuxt-primary text-supanuxt-primary after:bg-supanuxt-primary'
    : props.color == 'secondary' ? 'bg-supanuxt-secondary border-supanuxt-secondary text-supanuxt-secondary'
    : props.color
})
const colorElements = computed(() => {
    return props.variant == 'outline' ? 'text-current'
    : props.variant == 'ghost' ? 'text-current'
    : props.variant == 'soft' ? 'text-current'
    : 'text-white'
})

const variant = computed(() => {
    return props.variant == 'solid' ? 'bg-opacity-100 text-white'
    : props.variant == 'gradient' ? 'bg-gradient-to-r from-supanuxt-primary to-supanuxt-secondary text-white'
    : props.variant == 'outline' ? 'border border-solid bg-opacity-0'
    : props.variant == 'ghost' ? 'bg-opacity-0 hover:bg-opacity-10'
    : props.variant == 'soft' ? 'bg-opacity-10'
    : props.variant == 'link' ? 'bg-opacity-0 px-0 after:content-[""] after:w-full after:h-0.5 after:absolute after:left-0 after:-bottom-1 after:transform after:scale-x-0 after:origin-left'
    : props.variant
})
const transition = computed(() => {
    if (props.transition) return 'transition-all after:transition-all'
})
const transitionDuration = computed(() => {
    return props.transitionDuration == 'normal' ? 'duration-150 after:duration-150'
    : props.transitionDuration == 'fast' ? 'duration-75 after:duration-75'
    : props.transitionDuration == 'slow' ? 'duration-300 after:duration-300'
    : props.transitionDuration
})
const transitionType = computed(() => {
    return props.transitionType == 'opacity' && props.variant == 'solid' ? 'hover:bg-opacity-90'
    : props.transitionType == 'opacity' && props.variant == 'gradient' ? 'hover:bg-gradient-to-l'
    : props.transitionType == 'opacity' && props.variant == 'soft' ? 'hover:bg-opacity-30'
    : props.transitionType == 'opacity' && props.variant == 'ghost' ? 'hover:bg-opacity-30'
    : props.transitionType == 'opacity' && props.variant == 'outline' ? 'hover:bg-opacity-10'
    : props.transitionType == 'opacity' && props.variant == 'link' ? 'hover:opacity-80'
    : props.transitionType == 'link' && props.variant == 'link' ? 'hover:after:scale-x-100'
    : props.transitionType
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
const loaderSize = computed(() => {
    return props.size == 'sm' ? 'w-3'
    : props.size == 'md' ? 'w-5'
    : props.size == 'lg' ? 'w-6'
    : props.size == 'xl' ? 'w-7'
    : props.loaderSize
})
</script>
<template>
    <component 
    :is="props.as" 
    :type="props.type" 
    :class="[block, reversed, justified, transition, transitionDuration, transitionType, size, color, variant, rounded, shadow]">
        <ui-icon v-if="props.icon" :name="props.icon" class="mx-1" />
        <slot>
            <span v-if="props.label" class="mx-1">{{ props.label }}</span>
        </slot>
        <span v-if="props.loader"
            :class="[color, rounded, { 'w-full h-full absolute top-0 left-0 flex items-center justify-center z-10': props.loaderAbsolute }]">
            <svg :class="['animate-spin', loaderSize, colorElements]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </span>
    </component>
</template>