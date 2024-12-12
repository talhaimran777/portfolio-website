import { clsx } from 'clsx'

const Card = ({
    title,
    description,
    technologies,
    image,
    livePreview,
    githubUrl,
    imageClass = '',
}: {
    title: String
    description: String
    technologies: String[]
    image?: any
    livePreview: string
    githubUrl: string
    imageClass?: string
}) => {
    return (
        <div className='flex flex-col justify-between items-center gap-6 bg-white shadow-md rounded-2xl w-full max-w-[318px] h-[386px] p-4'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xl text-black font-bold'>{title}</h3>
                <div className='flex gap-x-2'>
                    <p className='font-bold text-black'>Stack:</p>
                    <p className='text-gray-500 font-semibold'>
                        {technologies.join(', ')}
                    </p>
                </div>
            </div>
            <div
                className={`h-[200px] w-full bg-cover rounded-2xl ${clsx({
                    [`${imageClass}`]: imageClass !== '',
                })}`}
            ></div>
            <div className='flex justify-between items-center w-full'>
                <a
                    href={livePreview}
                    target='_blank'
                    className='text-blue-500 hover:underline'
                >
                    Live Preview
                </a>
                <a
                    href={githubUrl}
                    target='_blank'
                    className='text-blue-500 hover:underline'
                >
                    View Code
                </a>
            </div>
        </div>
    )
}

export default Card
