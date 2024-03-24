import Image, { StaticImageData } from 'next/image'

const BlogPostImage = ({ image }: { image: StaticImageData }) => {
    return (
        <Image
            src={image}
            alt='Blog post image'
            layout='responsive'
            placeholder='blur'
            className='w-full rounded-md'
        />
    )
}

export default BlogPostImage
