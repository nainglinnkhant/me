import Image from 'next/image'
import IconLink from '../Base/IconLink'
import github from '../../public/social/github.svg'
import externalLink from '../../public/general/external-link.svg'

export default function Project({ project }) {
     return (
          <div className='shadow-md'>
               <a href={project.link} target='__blank' rel='noopener noreferrer'>
                    <div className='relative'>
                         <div className='absolute w-full h-full bg-dark opacity-20 dark:z-10 dark:hover:bg-transparent transition-all duration-500 ease-in-out'></div>

                         <Image
                              src={project.image}
                              alt={project.name}
                              layout='responsive'
                              priority
                         />
                    </div>
               </a>

               <div className='px-8 py-5'>
                    <a href={project.link} target='__blank' rel='noopener noreferrer'>
                         <h3 className='inline-block font-medium mb-2'>{project.name}</h3>
                    </a>

                    <p className='mb-4 text-sm'>{project.description}</p>

                    <ul className='mb-4'>
                         {project.techs.map((tech) => (
                              <li className='inline-block mr-4 text-secondary text-sm' key={tech}>
                                   {tech}
                              </li>
                         ))}
                    </ul>

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
     )
}
