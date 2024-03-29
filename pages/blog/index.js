import DocumentHead from '../../components/Layout/DocumentHead'
import Article from '../../components/Blog/Article'
import { getAllArticles } from '../../lib/mdx'

export default function blog({ articles }) {
    return (
        <>
            <DocumentHead
                title='Blog | Naing Linn Khant'
                description='The things Naing Linn Khant has written so far'
                url='https://nainglinnkhant.vercel.app/blog'
            />

            <div className='wrapper'>
                <div className='flex flex-col items-center py-20 md:py-24'>
                    {articles.map((article) => (
                        <Article article={article} key={article.title} />
                    ))}
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const articles = (await getAllArticles()).map((article) => article.frontmatter)

    return {
        props: {
            articles,
        },
    }
}
