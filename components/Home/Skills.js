import Image from 'next/image'

const techs = [
     'HTML5',
     'CSS3',
     'Bootstrap',
     'TailwindCSS',
     'JavaScript',
     'Vue',
     'React',
     'Next',
     'Node',
     'Express',
     'Mongodb',
     'Firebase',
]

export default function Skills() {
     return (
          <div className='mb-36' data-aos='fade-up'>
               <h2 className='section-heading'>Technical Skills</h2>

               <p className='paragraph text-center mb-8'>
                    Some technologies I have had experience with:
               </p>

               <div className='flex flex-wrap gap-6 justify-center items-center'>
                    {techs.map((tech) => (
                         <div
                              className='text-center rounded-full w-32 h-32 flex flex-col justify-center items-center shadow-neuro-inset dark:shadow-neuro-inset-dark'
                              key={tech}
                         >
                              <Image
                                   src={`/logos/${tech.toLowerCase()}.svg`}
                                   alt={tech}
                                   width='37px'
                                   height='37px'
                                   className={`filter-${tech.toLowerCase()}`}
                              />
                              <p className='mt-1 text-secondary'>{tech}</p>
                         </div>
                    ))}
               </div>
          </div>
     )
}
