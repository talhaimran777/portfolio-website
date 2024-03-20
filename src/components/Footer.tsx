import React from 'react'

import Logo from 'images/logo.svg'
import Image from 'next/image'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='py-6 lg:py-12 text-[#42446E]'>
            <div className='max-w-[1000px] mx-auto'>
                <hr />
                <div className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-center mt-11'>
                    <a href='/'>
                        <Image
                            src={Logo}
                            alt='Talha Imran'
                            className='h-7 md:h-9 w-7 md:w-9'
                        />
                    </a>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-x-3'>
                        <p>+923114048235</p>
                        <p>talhaimran284@gmail.com</p>

                        <div className='flex justify-between items-center mt-3 md:mt-0 gap-x-2'>
                            <a
                                href='https://www.linkedin.com/in/talhaimran777'
                                target='_blank'
                            >
                                <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all'>
                                    <FaLinkedinIn className='text-md md:text-xl' />
                                </div>
                            </a>
                            <a
                                href='https://github.com/talhaimran777'
                                target='_blank'
                            >
                                <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all'>
                                    <FaGithubAlt className='text-md md:text-xl' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
