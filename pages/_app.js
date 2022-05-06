import '../styles/globals.css'
import Layout from '../components/Layouts/main'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout router={router} />
            <Component {...pageProps} key={router.route} />
        </>
    )
}

export default MyApp
