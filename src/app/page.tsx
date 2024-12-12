import BlogPosts from 'components/BlogPosts'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import IntroSection from 'components/IntroSection'
import Projects from 'components/Projects'

export default function Home() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <Projects />
            <BlogPosts />
            <Footer />
        </>
    )
}
