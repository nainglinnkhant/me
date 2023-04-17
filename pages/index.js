import Landing from '../components/Home/Landing'
import About from '../components/Home/About'
import Skills from '../components/Home/Skills'
import Timeline from '../components/Home/Timeline'
import Contact from '../components/Home/Contact'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import DocumentHead from '../components/Layout/DocumentHead'

export default function Home({ techs }) {
    return (
        <>
            <DocumentHead
                title='Naing Linn Khant - Software Developer'
                description='A passionate Software Developer who loves writing sleek, reusable codes and crafting optimized, scalable websites.'
                url='https://nainglinnkhant.vercel.app/'
            />

            <main className='wrapper'>
                <Landing />
                <About />
                <Skills techs={techs} />
                <FeaturedProjects />
                <Timeline />
                <Contact />
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_APP_FIREBASE_URL}/techs.json`)
    const techs = (await res.json()) ?? []

    return {
        props: {
            techs,
        },
        revalidate: 10,
    }
}
