import Head from 'next/head'
import { useTheme } from '../../context/ThemeContext'

const IMAGE = 'https://avatars.githubusercontent.com/u/76158995?v=4'

export default function DocumentHead({ title, description, image = IMAGE, url }) {
    const { theme } = useTheme()

    return (
        <Head>
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:url' content={url} />
            <meta name='twitter:creator' content='@nainglk' />

            <meta property='og:type' content='website' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />
            <meta property='og:url' content={url} />
            <meta property='og:site_name' content='Naing Linn Khant - Software Developer' />

            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content={description} />
            <meta
                name='theme-color'
                content={theme === 'light' ? 'rgb(249 250 251)' : 'rgb(20, 27, 31)'}
            />
            <title>{title}</title>
        </Head>
    )
}
