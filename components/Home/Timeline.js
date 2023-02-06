import styles from '../../styles/Timeline.module.css'

const timeline = [
    {
        description: 'High School',
        time: '2015-2017',
        icon: 'fas fa-graduation-cap',
    },
    {
        description: 'University of Technology - Yatanarpon Cyber City',
        time: '2017-2020',
        icon: 'fas fa-graduation-cap',
    },
    {
        description: 'Software Engineer at MO',
        time: 'Feb, 2022-Jan 2023',
        icon: 'fas fa-solid fa-briefcase',
        content: () => (
            <h3 className='font-semibold mb-2'>
                Software Engineer at&nbsp;
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
]

export default function Timeline() {
    return (
        <div className={`${styles.timeline} mb-36`} data-aos='fade-up'>
            <h2 className='section-heading'>Timeline</h2>

            <div className='flex justify-center'>
                <div className='w-4/5 lg:w-3/4 relative'>
                    <div className={`${styles['center-line']} bg-black dark:bg-gray-200`}></div>

                    {timeline.map((el, index) => (
                        <div
                            className={`${
                                styles[`${index % 2 === 0 ? 'left' : 'right'}`]
                            } lg:mx-10 mt-10`}
                            key={index}
                        >
                            <div
                                className={`${styles.content} shadow-neuro dark:shadow-neuro-dark`}
                            >
                                <i className={`${el.icon} theme shadow-md`}></i>

                                {el.content && typeof el.content === 'function' ? (
                                    el.content()
                                ) : (
                                    <h3 className='font-semibold mb-2'>{el.description}</h3>
                                )}

                                <p className='text-secondary'>{el.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
