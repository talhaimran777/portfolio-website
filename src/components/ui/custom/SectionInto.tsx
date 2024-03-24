import React from 'react'

const SectionInto = ({
    heading,
    secondaryHeading,
}: {
    heading: String
    secondaryHeading: String
}) => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl lg:text-4xl mb-3 lg:mb-6 font-black'>
                {heading}
            </h1>
            <p className='text-xl lg:text-2xl font-light dark:text-slate-300'>
                {secondaryHeading}
            </p>
        </div>
    )
}

export default SectionInto
