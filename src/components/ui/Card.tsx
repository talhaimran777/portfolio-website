import Image from "next/image";
import React from "react";
import ProfileImage from "images/profile-pic.jpg";

const Card = ({
  title,
  description,
  technologies,
}: {
  title: String;
  description: String;
  technologies: String[];
}) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-[375px] mx-auto">
      <Image
        className="w-full h-48 object-cover"
        src={ProfileImage}
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
