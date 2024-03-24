import Image from 'next/image'
import ProfilePic from 'images/profile-pic.jpg'
import SectionInto from 'components/ui/custom/SectionInto'

const HeroSection = () => {
    return (
        <div className='my-[70px] lg:my-[100px] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center mb-16 font-bold leading-[70px] text-center max-w-xl'>
                <SectionInto
                    heading={'Frontend Web Developer'}
                    secondaryHeading={
                        'I code beautifully simple things, and I love what I do.'
                    }
                />
            </div>
            <Image
                className='h-52 w-52 rounded-full border-4 border-[#7B6BF3]'
                src={ProfilePic}
                alt='Profile Image'
                placeholder='blur'
            />
        </div>
    )
}

export default HeroSection
