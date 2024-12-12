import SectionInto from 'components/ui/custom/SectionInto'
import Link from 'next/link'

const BlogPost = ({
    title,
    date,
    description,
    link,
}: {
    title: string
    description: string
    date: string
    link: string
}) => {
    return (
        <Link href={link}>
            <div className='flex flex-col gap-2 border-b-2 dark:border-white pb-3'>
                <div className='flex justify-between items-center gap-2 flex-wrap'>
                    <h1 className='text-xl lg:text-2xl font-bold'>{title}</h1>
                    <p className='text-sm min-w-fit dark:text-slate-300'>
                        {date}
                    </p>
                </div>
                <p className='dark:text-slate-300'>{description}</p>
            </div>
        </Link>
    )
}

const BlogPosts = () => {
    return (
        <div className='mt-16 lg:mt-32 max-w-[1200px] mx-auto'>
            <SectionInto
                heading='Blog Posts'
                secondaryHeading='Things I have written so far!'
            />

            <div className='mt-8 lg:mt-16 max-w-lg mx-auto flex flex-col gap-8 lg:gap-16'>
                <BlogPost
                    title='TMUX - Sessions Guide 🚀'
                    date='Aug 25, 2024'
                    description='A beginner-friendly guide to TMUX sessions.'
                    link='/tmux-sessions-guide'
                />
            </div>
        </div>
    )
}

export default BlogPosts
