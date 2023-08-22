import Card from "components/ui/Card";
import SectionInto from "components/ui/SectionInto";
import MultiStepForm from "images/multi-step-form.png";
import DeveloperPortfolio from "images/developer-portfolio.png";

const Projects = () => {
  return (
    <div className="my-[50px] lg:my-[100px] max-w-[1200px] mx-auto">
      <SectionInto
        heading="Projects"
        secondaryHeading="Things I have built so far!"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 my-16 lg:my-32 items-start place-items-center">
        <Card
          image={MultiStepForm}
          title="Multi Step Form"
          description="Crafted with Next.js, Context API, and Tailwind CSS, this multi-step form offers a seamless user experience. Simplify complex data collection in style."
          technologies={["nextjs", "context api", "tailwindcss", "react"]}
          livePreview="https://multi-step-form-n84yetjdt-talhaimran777.vercel.app"
          githubUrl="https://github.com/talhaimran777/multi-step-form-challenge"
        />
        <Card
          image={DeveloperPortfolio}
          title="Devloper Portfolio Website"
          description="Leveraging the latest in web development technologies, I utilized Next.js to build an optimized and visually appealing front-end interface that incorporates proper image and font optimizations. Further enhancing the user experience, I integrated animations using the Framer Motion library"
          technologies={["nextjs", "framer motion", "tailwindcss", "react"]}
          livePreview="https://single-page-devloper-portfolio-challenge.vercel.app"
          githubUrl="https://github.com/talhaimran777/single-page-devloper-portfolio-challenge"
        />

      </div>
    </div>
  );
};

export default Projects;
