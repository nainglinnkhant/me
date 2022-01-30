import { useEffect, useState } from 'react'
import DocumentHead from '../../components/Layout/DocumentHead'
import articles from '../../articles-test.json'

export default function ArticleDetails({ article }) {
     const [scrolled, setScrolled] = useState(0)

     const handleProgressOnScroll = () => {
          const windowScroll =
               window.scrollY || document.body.scrollTop || document.documentElement.scrollTop

          const windowHeight =
               document.documentElement.scrollHeight - document.documentElement.clientHeight

          const scrolledAmount = `${(windowScroll / windowHeight) * 100}%`
          setScrolled(scrolledAmount)
     }

     useEffect(() => {
          window.addEventListener('scroll', handleProgressOnScroll)

          return () => window.removeEventListener('scroll', handleProgressOnScroll)
     }, [])

     const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
     }

     return (
          <>
               <DocumentHead title={article.name} content={article.name} />

               <div
                    className='fixed top-0 left-0 bg-gray-700 dark:bg-gray-300 z-50'
                    style={{ height: '3px', width: scrolled }}
               ></div>

               <button
                    className='fixed bottom-10 right-10 text-lg bg-gray-200 dark:bg-gray-800 shadow rounded px-3 py-1'
                    onClick={handleScrollToTop}
               >
                    <i className='fas fa-chevron-up'></i>
               </button>

               <div className='wrapper'>
                    <div className='flex flex-col items-center py-28'>
                         <div className='w-full md:w-3/4'>
                              <h2 className='article-heading mb-4'>{article.name}</h2>

                              <div className='text-secondary mb-10'>
                                   <span className='mr-4'>{article.date}</span>
                                   <span>#{article.category}</span>
                              </div>

                              {article.content.split('<br>').map((paragraph, index) => (
                                   <p
                                        className='paragraph text-gray-700 dark:text-gray-300 mb-8'
                                        key={index}
                                   >
                                        {paragraph}
                                   </p>
                              ))}
                         </div>
                    </div>
               </div>
          </>
     )
}

export const getStaticPaths = async () => {
     return {
          fallback: false,
          paths: articles.map((article) => ({
               params: {
                    slug: article.slug,
               },
          })),
     }
}

export const getStaticProps = (context) => {
     const { slug } = context.params
     const article = articles.find((article) => article.slug === slug)

     return {
          props: {
               article,
          },
          revalidate: 10,
     }
}
