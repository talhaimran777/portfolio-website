import Image, { StaticImageData } from 'next/image'

const BlogPostHeader = ({
    title,
    date,
    image,
}: {
    title: string
    date: string
    image: StaticImageData
}) => {
    return (
        <div>
            <h1 className='text-4xl lg:text-5xl mb-2 font-black lg:leading-[50px]'>
                {title}
            </h1>

            <p className='text-sm lg:text-base dark:text-slate-300'>
                <strong className='dark:text-white'>Published:</strong> {date}
            </p>

            <Image
                src={image}
                alt={title}
                layout='responsive'
                placeholder='blur'
                className='mt-5 rounded-md'
            />
        </div>
    )
}

export default BlogPostHeader
