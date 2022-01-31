import Image from 'next/image'
import styles from '../../styles/About.module.css'
import programmer from '../../public/general/programmer.svg'

export default function About() {
     return (
          <div className={`${styles.about} mt-16 mb-36`} data-aos='fade-up'>
               <h2 className='section-heading'>About Me</h2>

               <div className='flex flex-wrap gap-y-10 justify-center items-center'>
                    <p className='basis-full md:basis-3/5 paragraph'>
                         Web developer with advanced JavaScript knowledge and inquisitive,
                         open-minded, and responsible mentality. Able to efficiently write websites
                         and web apps with Vue.js and React.js. I'm currently strengthening my
                         Node.js and MongoDB knowledge.
                    </p>

                    <div className='basis-full md:basis-2/5'>
                         <div className='relative h-64'>
                              <Image src={programmer} alt='Programmer' layout='fill' />
                         </div>
                    </div>
               </div>
          </div>
     )
}
