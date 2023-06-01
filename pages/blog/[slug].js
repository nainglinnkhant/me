import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import dateFormat from 'dateformat'
import DocumentHead from '../../components/Layout/DocumentHead'
import useScrolled from '../../hooks/useScrolled'
import { getArticleSlugs, getArticleBySlug } from '../../lib/mdx'
import 'highlight.js/styles/base16/material.css'

export default function ArticleDetails({ article }) {
    const { scrolled } = useScrolled()

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const { frontmatter, source } = article

    return (
        <>
            <DocumentHead
                title={`${frontmatter.title} - Naing Linn Khant`}
                description={frontmatter.description}
            />

            <div
                className='fixed left-0 top-0 z-50 bg-gray-700 dark:bg-gray-300'
                style={{ height: '3px', width: scrolled }}
            ></div>

            <button
                className='fixed bottom-10 right-10 rounded bg-gray-200 px-3 py-1 text-lg shadow dark:bg-gray-800'
                onClick={handleScrollToTop}
            >
                <i className='fas fa-chevron-up'></i>
            </button>

            <div className='wrapper'>
                <div className='flex flex-col items-center py-24 md:py-28'>
                    <div className='w-full md:w-3/4'>
                        <h2 className='article-heading mb-4'>{frontmatter.title}</h2>

                        <div className='mb-10 text-zinc-500'>
                            <span>{dateFormat(frontmatter.publishedAt, 'd mmm, yyyy')}</span>
                            <span className='mx-2'>·</span>
                            <span>{frontmatter.readingTime?.text}</span>
                        </div>

                        <div className='prose dark:prose-invert'>
                            <MDXRemote {...source} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const slugs = await getArticleSlugs()

    return {
        fallback: false,
        paths: slugs.map((slug) => ({
            params: {
                slug,
            },
        })),
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params
    const { frontmatter, content } = getArticleBySlug(slug)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    { behavior: 'wrap', properties: { ariaLabel: 'heading' } },
                ],
                rehypeHighlight,
            ],
            format: 'mdx',
        },
    })

    return {
        props: {
            article: {
                frontmatter,
                source: mdxSource,
            },
        },
        revalidate: 10,
    }
}
