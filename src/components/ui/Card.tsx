import Image from "next/image";

const Card = ({
  title,
  description,
  technologies,
  image,
  livePreview,
  githubUrl,
}: {
  title: String;
  description: String;
  technologies: String[];
  image: any;
  livePreview: string;
  githubUrl: string;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-[375px]">
      <Image
        className="w-full rounded-lg"
        src={image}
        alt="Project Image"
        placeholder="blur"
      />
      <hr/>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-justify">{description}</p>
        <div className="flex mt-3 gap-x-2">
          <p className="font-bold">Stack:</p>
          <p className="text-gray-500">{technologies.join(", ")}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={livePreview}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Live Preview
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
