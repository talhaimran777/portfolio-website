import Navbar from 'components/ui/custom/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'components/ThemeProvider'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Talha Imran',
    description: 'Talha Imran is a full-stack developer and a VIM enthusiast.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={dmSans.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className='px-4 min-[1208px]:px-0 dark:bg-[#20212C] text-slate-800 dark:text-white'>
                        <Navbar />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
