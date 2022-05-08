import '../styles/globals.css'
import Layout from '../components/Layouts/main'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Layout router={router} />
            <Component {...pageProps} key={router.route} />
        </>
    )
}

export default MyApp
