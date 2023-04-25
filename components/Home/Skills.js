import Image from 'next/image'

export default function Skills({ techs }) {
    return (
        <section className='mb-36' data-aos='fade-up'>
            <h2 className='section-heading'>Technical Skills</h2>

            <p className='paragraph text-center mb-8'>Technologies I have had experience with:</p>

            <div className='flex flex-wrap gap-6 justify-center items-center'>
                {techs.map((tech) => (
                    <div
                        className='text-center rounded-full w-32 h-32 flex flex-col justify-center items-center shadow-neuro-inset dark:shadow-neuro-inset-dark'
                        key={tech.slug}
                    >
                        <Image
                            src={`/logos/${tech.slug}.svg`}
                            alt={tech.name}
                            width='37px'
                            height='37px'
                            className={`filter-${tech.slug}`}
                        />
                        <p className='mt-1 text-secondary'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
