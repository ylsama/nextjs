import Head from 'next/head'

const Main = ({ children, router }) => {
    return (
        <div as="main" className="pt-2">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title> YL-sama - Hompagee</title>
            </Head>
            <div className="max-w-5xl pt-4">{children}</div>
        </div>
    )
}

export default Main
