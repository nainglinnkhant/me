import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta property='og:title' content='Naing Linn Khant | Frontend Developer' />
                    <meta property='og:type' content='website' />
                    <meta property='og:url' content='https://nainglinnkhant.vercel.app/' />
                    <meta
                        property='og:image'
                        content='https://nainglinnkhant.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprogrammer.e0334b76.svg&w=3840&q=75'
                    />
                    <link
                        rel='stylesheet'
                        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
                        integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
                        crossOrigin='anonymous'
                        referrerPolicy='no-referrer'
                    />
                </Head>

                <body className='theme'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
