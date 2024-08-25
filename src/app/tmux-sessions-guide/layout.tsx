import Footer from 'components/Footer'
import Link from 'next/link'
import { FaHouse } from 'react-icons/fa6'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className='max-w-2xl mx-auto text-slate-800 dark:text-white'>
                <Link href='/'>
                    <div className='text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-2 md:p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all my-8 w-fit'>
                        <FaHouse className='text-md md:text-xl' />
                    </div>
                </Link>

                {children}
            </div>
            <Footer />
        </div>
    )
}
