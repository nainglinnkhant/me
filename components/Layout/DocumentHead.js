import Head from 'next/head'
import { useTheme } from '../../context/ThemeContext'

export default function DocumentHead({ title, content }) {
     const { theme } = useTheme()

     return (
          <Head>
               <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
               <meta name='viewport' content='width=device-width, initial-scale=1' />
               <meta name='description' content={content} />
               <meta
                    name='theme-color'
                    content={theme === 'light' ? 'rgb(249 250 251)' : 'rgb(20, 27, 31)'}
               />
               <title>{title}</title>
          </Head>
     )
}
