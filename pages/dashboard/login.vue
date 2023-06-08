<script setup lang="ts">
    definePageMeta({
        layout: 'live'
    })

    const user = useSupabaseUser()
    const client = useSupabaseClient()
    const router = useRouter()

    const data = reactive({
        email: '',
        password: ''
    })

    const signup = async() => {
        const { error } = await client.auth.signUp({
            email: data.email,
            password: data.password
        })

        if (error) {
            return alert('Something went wrong !')
        }
    }

</script>
<template>
    <ui-center as="section" height="h-screen">
        <ui-container>
            <ui-card rounded="big">
                <form @submit.prevent="signup">
                    <input v-model="data.email" type="email" name="email" placeholder="email">
                    <input v-model="data.password" type="password" name="password" placeholder="password">
                    <button>
                        Sign Up
                    </button>
                </form>
            </ui-card>
        </ui-container>
    </ui-center>
</template>