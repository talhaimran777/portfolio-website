import Card from "components/ui/Card";
import SectionInto from "components/ui/SectionInto";

const Projects = () => {
  return (
    <div className="my-[50px] lg:my-[100px] max-w-[1200px] mx-auto">
      <SectionInto
        heading="Projects"
        secondaryHeading="Things I have built so far!"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 my-16 lg:my-24">
        <Card
          title="Chat Application"
          description="This is a real time chat application built using React, Node & typescript."
          technologies={["React", "Node", "Socket.io", "Next.js", "Graphql"]}
        />
      </div>
    </div>
  );
};

export default Projects;