import Link from 'next/link'
import dateFormat from 'dateformat'

export default function Article({ article }) {
    return (
        <article className='w-full border-b py-8 dark:border-gray-700 md:w-3/4'>
            <h3 className='article-heading mb-4'>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </h3>

            <div className='text-secondary mb-4'>
                <span className='mr-5'>
                    {dateFormat(article.publishedAt?.replaceAll('-', '/'), 'd mmm, yyyy')}
                </span>
            </div>

            <p className='paragraph'>{article.description}</p>
        </article>
    )
}
