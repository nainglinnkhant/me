import styles from '../../styles/Timeline.module.css'

const timeline = [
    {
        description: 'High School',
        time: '2015 - 2017',
        icon: 'fas fa-graduation-cap',
    },
    {
        description: 'University of Technology - Yatanarpon Cyber City',
        time: '2017 - 2020',
        icon: 'fas fa-graduation-cap',
    },
    {
        description: 'Software Developer at MO',
        time: 'Feb 2022 - Jan 2023',
        icon: 'fas fa-solid fa-briefcase',
        content: () => (
            <h3 className='mb-2 font-semibold'>
                Software Developer at&nbsp;
                <a
                    href='https://www.mo.com.mm/'
                    style={{ color: '#4cb849' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    MO
                </a>
            </h3>
        ),
    },
    {
        description: 'Frontend Developer at Idea Offshore',
        time: 'Feb 2023 - Apr 2023',
        icon: 'fas fa-solid fa-briefcase',
    },
    {
        description: 'Frontend Developer at ThitsaWorks',
        time: 'Apr 2023 - Dec 2023',
        icon: 'fas fa-solid fa-briefcase',
        content: () => (
            <h3 className='mb-2 font-semibold'>
                Frontend Developer at&nbsp;
                <a
                    href='https://www.thitsaworks.com/'
                    style={{ color: '#6d93cb' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    ThitsaWorks
                </a>
            </h3>
        ),
    },
    {
        description: 'Frontend Engineer at Roofer.com',
        time: 'Jan 2024 - Present',
        icon: 'fas fa-solid fa-briefcase',
        content: () => (
            <h3 className='mb-2 font-semibold'>
                Frontend Engineer at&nbsp;
                <a
                    href='https://www.roofer.com/'
                    style={{ color: '#6E37A6' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Roofer.com
                </a>
            </h3>
        ),
    },
]

export default function Timeline() {
    return (
        <section className={`${styles.timeline} mb-36`} data-aos='fade-up'>
            <h2 className='section-heading'>Timeline</h2>

            <div className='flex justify-center'>
                <div className='relative w-4/5 lg:w-3/4'>
                    <div className={`${styles['center-line']} bg-black dark:bg-gray-200`}></div>

                    {timeline.map((el, index) => (
                        <div
                            className={`${
                                styles[`${index % 2 === 0 ? 'left' : 'right'}`]
                            } mt-10 lg:mx-10`}
                            key={index}
                        >
                            <div
                                className={`${styles.content} shadow-neuro dark:shadow-neuro-dark`}
                            >
                                <i className={`${el.icon} theme shadow-md`}></i>

                                {el.content && typeof el.content === 'function' ? (
                                    el.content()
                                ) : (
                                    <h3 className='mb-2 font-semibold'>{el.description}</h3>
                                )}

                                <p className='text-secondary'>{el.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
