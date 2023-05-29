import IconLink from '../Base/IconLink'
import github from '../../public/social/github.svg'
import facebook from '../../public/social/facebook.svg'
import linkedin from '../../public/social/linkedin.svg'

export default function Contact() {
    return (
        <section className='mb-36 flex flex-col items-center justify-center' data-aos='fade-up'>
            <h2 className='section-heading'>Get in Touch</h2>

            <p className='paragraph mb-8 text-center'>
                Wanna know more about my work? Got any questions? Or just want to say hi? Go ahead.
            </p>

            <a
                href='mailto:nainglinnkhnt@gmail.com'
                target='__blank'
                rel='noopener noreferrer'
                className='btn'
            >
                Say Hello
            </a>

            <div className='mt-10 flex items-center justify-center'>
                <IconLink
                    link='https://github.com/nainglinnkhant'
                    linkClass='mx-3'
                    icon={github}
                    alt='My Github Profile'
                />

                <IconLink
                    link='https://www.facebook.com/nainglinnkhnt'
                    linkClass='mx-3'
                    icon={facebook}
                    alt='My Facebook Profile'
                />

                <IconLink
                    link='https://www.linkedin.com/in/naing-linn-khant-925786191'
                    linkClass='mx-3'
                    icon={linkedin}
                    alt='My Linkedin Profile'
                />
            </div>
        </section>
    )
}
