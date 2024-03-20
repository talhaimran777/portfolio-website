const BlogPostHeader = ({ title, date }: { title: string; date: string }) => {
    return (
        <div>
            <h1 className='text-3xl lg:text-4xl mb-2 font-black lg:leading-[50px]'>
                {title}
            </h1>
            <p className='text-sm lg:text-base'>
                <strong>Published:</strong> {date}
            </p>
        </div>
    )
}

export default BlogPostHeader
