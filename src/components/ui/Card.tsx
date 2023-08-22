import Image from "next/image";

const Card = ({
  title,
  description,
  technologies,
  image,
}: {
  title: String;
  description: String;
  technologies: String[];
  image: any;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-[375px] mx-auto">
      <Image
        className="w-full rounded-lg"
        src={image}
        alt="Project Image"
        placeholder="blur"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-justify">{description}</p>
        <div className="flex justify-between mt-3 gap-x-2">
          <p className="font-bold">Stack:</p>
          <p>{technologies.join(", ")}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a href="#" className="text-blue-500 hover:underline">
            Live Preview
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
