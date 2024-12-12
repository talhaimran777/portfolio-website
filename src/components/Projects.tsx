import Card from 'components/ui/custom/Card'
import SectionInto from 'components/ui/custom/SectionInto'

const Projects = () => {
    return (
        <div className='mt-16 lg:mt-32 max-w-[1200px] mx-auto'>
            <SectionInto
                heading='Projects'
                secondaryHeading='Things I have built so far!'
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 lg:mt-32 items-center'>
                <div className='flex justify-center md:justify-start'>
                    <Card
                        title='Tasks Management System'
                        description='A task management system that allows you to manage your side projects by creating, updating, and deleting tasks. Built with Next.js, Zustand, and Tailwind CSS.'
                        technologies={[
                            'nextjs',
                            'context api',
                            'tailwindcss',
                            'react',
                        ]}
                        livePreview='https://task-management.talhaimran.dev/'
                        githubUrl='https://github.com/talhaimran777/kanban-task-management-app'
                        imageClass='bg-tasks-management-system'
                    />
                </div>
                <div className='flex justify-center md:justify-end lg:justify-center'>
                    <Card
                        title='Devloper Portfolio Website'
                        description='Leveraging the latest in web development technologies, I utilized Next.js to build an optimized and visually appealing front-end interface that incorporates proper image and font optimizations. Further enhancing the user experience, I integrated animations using the Framer Motion library'
                        technologies={[
                            'nextjs',
                            'framer motion',
                            'tailwindcss',
                            'react',
                        ]}
                        livePreview='https://single-page-devloper-portfolio-challenge.vercel.app'
                        githubUrl='https://github.com/talhaimran777/single-page-devloper-portfolio-challenge'
                        imageClass='bg-developer-portfolio'
                    />
                </div>
                <div className='flex justify-center md:justify-start lg:justify-end'>
                    <Card
                        title='Nested Commenting System'
                        description='Presenting a React-powered Reddit-like nested commenting system clone: For the first time in my life, I am recursively calling a react component to create this nested looking commenting system.'
                        technologies={['vite', 'context api', 'tailwindcss']}
                        livePreview='https://nested-comments-system.vercel.app'
                        githubUrl='https://github.com/talhaimran777/nested-comments-system'
                        imageClass='bg-reddit-nested-comments'
                    />
                </div>
                <div className='flex justify-center md:justify-end lg:justify-start'>
                    <Card
                        title='Multi Step Form'
                        description='Crafted with Next.js, Context API, and Tailwind CSS, this multi-step form offers a seamless user experience. Simplify complex data collection in style.'
                        technologies={[
                            'nextjs',
                            'context api',
                            'tailwindcss',
                            'react',
                        ]}
                        livePreview='https://multi-step-form-n84yetjdt-talhaimran777.vercel.app'
                        githubUrl='https://github.com/talhaimran777/multi-step-form-challenge'
                        imageClass='bg-multi-step-form'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
