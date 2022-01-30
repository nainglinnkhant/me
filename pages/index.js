import Landing from '../components/Home/Landing'
import About from '../components/Home/About'
import Skills from '../components/Home/Skills'
import Timeline from '../components/Home/Timeline'
import Contact from '../components/Home/Contact'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import DocumentHead from '../components/Layout/DocumentHead'

export default function Home() {
     return (
          <>
               <DocumentHead title='Naing Linn Khant' content='Naing Linn Khant' />

               <main className='wrapper'>
                    <Landing />
                    <About />
                    <Skills />
                    <FeaturedProjects />
                    <Timeline />
                    <Contact />
               </main>
          </>
     )
}
