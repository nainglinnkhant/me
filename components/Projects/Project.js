import Image from 'next/image'
import IconLink from '../Base/IconLink'
import github from '../../public/social/github.svg'
import externalLink from '../../public/general/external-link.svg'

export default function Project({ project }) {
    return (
        <div className='shadow-md dark:shadow-md-dark'>
            <a href={project.link} target='__blank' rel='noopener noreferrer'>
                <div className='relative'>
                    <div className='absolute h-full w-full bg-dark opacity-20 transition-all duration-500 ease-in-out dark:z-10 dark:hover:bg-transparent'></div>

                    <Image src={project.image} alt={project.name} layout='responsive' priority />
                </div>
            </a>

            <div className='px-8 py-5'>
                <a href={project.link} target='__blank' rel='noopener noreferrer'>
                    <h3 className='mb-2 inline-block font-medium'>{project.name}</h3>
                </a>

                <p className='mb-4 text-sm'>{project.description}</p>

                <ul className='mb-4'>
                    {project.techs.map((tech) => (
                        <li className='text-secondary mr-4 inline-block text-sm' key={tech}>
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
