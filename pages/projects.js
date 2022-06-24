import DocumentHead from '../components/Layout/DocumentHead'
import Project from '../components/Projects/Project'
import n3xtify from '../public/project-images/n3xtify.png'
import movieMissile from '../public/project-images/moviemissile.png'
import recipeApp from '../public/project-images/recipe-app.png'
import quizzyQuiz from '../public/project-images/quizzy-quiz.png'
import trelloClone from '../public/project-images/trello-clone.png'

const projects = [
    {
        name: 'N3xtify',
        description: 'A front-end simulation of a real-world e-commerce app.',
        techs: ['Next.js', 'Redux Toolkit', 'Bootstrap', 'Firebase'],
        image: n3xtify,
        github: 'https://github.com/nainglinnkhant/n3xtify',
        link: 'https://n3xtify.vercel.app',
    },
    {
        name: 'Moviemissile',
        description: 'Movie info app with a variety of features.',
        techs: ['React.js', 'Redux Toolkit', 'Bootstrap', 'Firebase'],
        image: movieMissile,
        github: 'https://github.com/nainglinnkhant/moviemissile',
        link: 'https://moviemissile.netlify.app',
    },
    {
        name: 'Recipe App',
        description: 'An app where you can search a vast amount of recipes.',
        techs: ['Vue.js', 'Bootstrap', 'Firebase'],
        image: recipeApp,
        github: 'https://github.com/nainglinnkhant/recipe-app',
        link: 'https://recipeapp12.netlify.app',
    },
    {
        name: 'Quizzy Quiz',
        description: 'Quiz app with a great number of available categories.',
        techs: ['Vue.js', 'Bootstrap'],
        image: quizzyQuiz,
        github: 'https://github.com/nainglinnkhant/quizzy-quiz',
        link: 'https://quizyquiz.netlify.app',
    },
    {
        name: 'Trello Clone',
        description: 'A minimal trello clone.',
        techs: ['React.js'],
        image: trelloClone,
        github: 'https://github.com/nainglinnkhant/trello-clone',
        link: 'https://trello-clone-seven-tan.vercel.app',
    },
]

export default function Projects() {
    return (
        <>
            <DocumentHead
                title='Projects | Naing Linn Khant'
                content='Some things Naing Linn Khant have built'
            />

            <div className='wrapper'>
                <div className='projects grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 py-28 md:py-32'>
                    {projects.map((project) => (
                        <Project project={project} key={project.name} />
                    ))}
                </div>
            </div>
        </>
    )
}
