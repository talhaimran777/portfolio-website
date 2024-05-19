'use client'

import Logo from 'images/logo.svg'
import Image from 'next/image'
import { FaGithubAlt, FaLinkedinIn, FaMoon, FaSun } from 'react-icons/fa6'

import { useTheme } from 'next-themes'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'components/ui/dropdown-menu'
import Link from 'next/link'

const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <nav className='py-6 lg:py-12 bg-grey-primary dark:bg-very-dark-grey'>
            <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt='Talha Imran'
                        className='h-7 md:h-9 w-7 md:w-9'
                    />
                </Link>
                <div className='flex justify-between items-center gap-x-3'>
                    <a
                        href='https://www.linkedin.com/in/talhaimran777'
                        target='_blank'
                    >
                        <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all'>
                            <FaLinkedinIn className='text-md md:text-xl' />
                        </div>
                    </a>
                    <a href='https://github.com/talhaimran777' target='_blank'>
                        <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all'>
                            <FaGithubAlt className='text-md md:text-xl' />
                        </div>
                    </a>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all'>
                                <FaMoon className='text-md md:text-xl rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
                                <FaSun className='absolute text-md md:text-xl rotate-90 scale-0 dark:rotate-0 dark:scale-100' />
                                <span className='sr-only'>Toggle theme</span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem onClick={() => setTheme('light')}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme('system')}
                            >
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
