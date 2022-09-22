import '../node_modules/primeflex/primeflex.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"  //theme
import "primereact/resources/primereact.min.css"                 //core css
import "primeicons/primeicons.css"                             //icons
import { useForm  } from "react-hook-form"
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
