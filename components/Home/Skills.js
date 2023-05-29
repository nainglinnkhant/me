import Image from 'next/image'

export default function Skills({ techs }) {
    return (
        <section className='mb-36' data-aos='fade-up'>
            <h2 className='section-heading'>Technical Skills</h2>

            <p className='paragraph mb-8 text-center'>Technologies I have had experience with:</p>

            <div className='flex flex-wrap items-center justify-center gap-6'>
                {techs.map((tech) => (
                    <div
                        className='flex h-32 w-32 flex-col items-center justify-center rounded-full text-center shadow-neuro-inset dark:shadow-neuro-inset-dark'
                        key={tech.slug}
                    >
                        <Image
                            src={`/logos/${tech.slug}.svg`}
                            alt={tech.name}
                            width='37px'
                            height='37px'
                            className={`filter-${tech.slug}`}
                        />
                        <p className='text-secondary mt-1'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
