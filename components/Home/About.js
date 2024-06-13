import Image from 'next/image'
import styles from '../../styles/About.module.css'
import programmer from '../../public/general/programmer.svg'

export default function About() {
    return (
        <section className={`${styles.about} mb-36 mt-16`} data-aos='fade-up'>
            <h2 className='section-heading'>About Me</h2>

            <div className='mt-8 flex flex-wrap items-center justify-center gap-y-10'>
                <div className='basis-full md:basis-3/5'>
                    <p className='paragraph mb-4'>
                        A dedicated software engineer with an inquisitive, detail-oriented,
                        open-minded, and responsible mindset. My excitement lies in trying out new
                        things and applying them in practical situations. Throughout my career, I've
                        worked on various projects and delivered high-quality, performant,
                        appealing, accessible, and scalable websites and software.
                    </p>

                    <p>
                        My core expertise is in frontend development, where I ensure accessibility,
                        scalability, and performance by strictly adhering to best practices and
                        utilizing efficient tools. Additionally, I have a fair share of backend and
                        database knowledge and have worked with PostgreSQL, MySQL, and NestJS. I
                        love building open-source software in my free time and{' '}
                        <a
                            href='https://scribble-delta.vercel.app'
                            target='__blank'
                            rel='noopener noreferrer'
                            className='underline'
                        >
                            Scribble
                        </a>{' '}
                        is one of these.
                    </p>
                </div>

                <div className='basis-full md:basis-2/5'>
                    <div className='relative h-64'>
                        <Image src={programmer} alt='Programmer' layout='fill' />
                    </div>
                </div>
            </div>
        </section>
    )
}
