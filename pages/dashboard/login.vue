<script setup lang="ts">
    definePageMeta({
        layout: 'live'
    })

    const user = useSupabaseUser()
    const client = useSupabaseClient()
    const router = useRouter()

    const state = reactive({
        email: '',
        password: '',
        loaders: {
            github: false
        }
    })

    const signinWithGithub = async() => {
        const { data, error } = await client.auth.signInWithOAuth({
            provider: 'github'
        })
    }

    const signin = async() => {
        const { data, error } = await client.auth.signInWithPassword({
            email: state.email,
            password: state.password
        })

        if (error) {
            console.log(error)
            console.log(error.message)
            console.log(error.status)
        }
    }

</script>
<template>
    <ui-center as="section" height="h-screen">
        <ui-container>
            <ui-card bg-color="white">
                <ui-form>
                    <ui-form-group :label="$t('signin.email')">

                    </ui-form-group>
                </ui-form>
                <ui-button @click="signinWithGithub" :label="`${$t('signin.signwith')} ${$t('signin.providers.github')}`" icon="ri:google-fill" :loader="state.loaders.github"/>                
            </ui-card>
            <button @click="state.loaders.github = !state.loaders.github">Active loader</button>
        </ui-container>
    </ui-center>

    
</template>