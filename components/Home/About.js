import Image from 'next/image'
import styles from '../../styles/About.module.css'
import programmer from '../../public/general/programmer.svg'

export default function About() {
    return (
        <section className={`${styles.about} mb-36 mt-16`} data-aos='fade-up'>
            <h2 className='section-heading'>About Me</h2>

            <div className='flex flex-wrap items-center justify-center gap-y-10'>
                <p className='paragraph basis-full md:basis-3/5'>
                    A JavaScript-based developer with an inquisitive, open-minded, and responsible
                    mentality. My excitement lies in trying out new things and applying them in
                    practical situations.
                </p>

                <div className='basis-full md:basis-2/5'>
                    <div className='relative h-64'>
                        <Image src={programmer} alt='Programmer' layout='fill' />
                    </div>
                </div>
            </div>
        </section>
    )
}
