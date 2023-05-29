import Link from 'next/link'

export default function Article({ article }) {
    return (
        <div className='w-full border-b py-8 dark:border-gray-700 md:w-3/4'>
            <h3 className='article-heading mb-4'>
                <Link href={`/blog/${article.slug}`}>{article.name}</Link>
            </h3>

            <div className='text-secondary mb-4'>
                <span className='mr-5'>{article.date}</span>

                <span>#{article.category}</span>
            </div>

            <p className='paragraph'>{article.abstract}</p>
        </div>
    )
}
