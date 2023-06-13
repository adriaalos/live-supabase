import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                supanuxt: {
                    primary: '#40bf86',
                    secondary: '#00dc82',
                    error: 'rgb(185 28 28)'
                }
            }
        }
    }
}