<script setup lang="ts">
import type { RealtimeChannel } from '@supabase/supabase-js'
let realtimeChannel: RealtimeChannel
const client = useSupabaseClient()

const { data: testing, refresh: refreshTesting } = await useAsyncData('testing', async () => {
    const { data } = await client.from('testing').select('id, created_at, string_test')

    return data
})

onMounted(() => {
    realtimeChannel = client.channel('public:testing').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'testing' },
        () => refreshTesting()
    )

    realtimeChannel.subscribe()
})

onUnmounted(() => {
  client.removeChannel(realtimeChannel)
})

</script>
<template>
    <div>{{ testing }}</div>
</template>