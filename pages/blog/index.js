import DocumentHead from '../../components/Layout/DocumentHead'
import Article from '../../components/Blog/Article'
import articles from '../../articles-test.json'

export default function blog() {
     return (
          <>
               <DocumentHead title='Blog | Naing Linn Khant' content="Naing Linn Khant's Blog" />

               <div className='wrapper'>
                    <div className='flex flex-col items-center py-20 md:py-24'>
                         {articles.map((article) => (
                              <Article article={article} key={article.name} />
                         ))}
                    </div>
               </div>
          </>
     )
}
