import Image from 'next/image'
import Link from 'next/link'
import IconLink from '../Base/IconLink'
import github from '../../public/social/github.svg'
import externalLink from '../../public/general/external-link.svg'
import n3xtifyMockup from '../../public/mockups/n3xtify-mockup.png'
import n3xtifyMobileMockup from '../../public/mockups/n3xtify-mobile-mockup.png'
import mmMockup from '../../public/mockups/moviemissile-mockup.png'
import mmMobileMockup from '../../public/mockups/moviemissile-mobile-mockup.png'
import styles from '../../styles/FeaturedProjects.module.css'

const projects = [
    {
        name: 'Nextify',
        description:
            'A front-end simulation of real-world e-commerce app (built with Next.js and Firebase).',
        mockup: n3xtifyMockup,
        mobileMockup: n3xtifyMobileMockup,
        github: 'https://github.com/nainglinnkhant/n3xtify',
        link: 'https://n3xtify.vercel.app',
    },
    {
        name: 'Moviemissile',
        description:
            'Movie info app with a variety of features (built with React.js and Firebase).',
        mockup: mmMockup,
        mobileMockup: mmMobileMockup,
        github: 'https://github.com/nainglinnkhant/moviemissile',
        link: 'https://moviemissile.vercel.app',
    },
]

export default function FeaturedProjects() {
    return (
        <section className={`${styles['featured-projects']} mb-36`}>
            <h2 className='section-heading' data-aos='fade-up'>
                Featured Projects
            </h2>

            <p className='paragraph text-center' data-aos='fade-up'>
                Some things I've built:
            </p>

            {projects.map((project, index) => (
                <div
                    className='mt-16 flex flex-wrap items-center gap-y-5'
                    key={project.name}
                    data-aos='fade-up'
                >
                    <div
                        className={`flex basis-full items-center md:basis-3/5 ${
                            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                        }`}
                    >
                        <div className='basis-3/4'>
                            <Image src={project.mockup} alt={`${project.name} mockup`} />
                        </div>

                        <div className='basis-1/4'>
                            <Image
                                src={project.mobileMockup}
                                alt={`${project.name} mobile mockup`}
                            />
                        </div>
                    </div>

                    <div
                        className={`basis-full md:basis-2/5 md:px-10 ${
                            index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                        }`}
                    >
                        <a href={project.link} target='__blank' rel='noopener noreferrer'>
                            <h3 className='inline-block text-lg font-semibold'>{project.name}</h3>
                        </a>

                        <p className='paragraph my-5'>{project.description}</p>

                        <div>
                            <IconLink
                                link={project.github}
                                linkClass='mr-3'
                                icon={github}
                                alt='Github Link'
                            />

                            <IconLink link={project.link} icon={externalLink} alt='Website Link' />
                        </div>
                    </div>
                </div>
            ))}

            <div className='flex justify-center' data-aos='fade-up'>
                <span className='btn mt-10 flex cursor-pointer items-center'>
                    <Link href='/projects'>See More</Link>
                    <i className='fas fa-chevron-right ml-2'></i>
                </span>
            </div>
        </section>
    )
}
