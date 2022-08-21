import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import {AppProvider} from '../data/context/AppContext'
import {AuthProvider} from '../data/context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <AppProvider> 
        <Component {...pageProps} />
     </AppProvider>
     </AuthProvider>
  )
}

export default MyApp
