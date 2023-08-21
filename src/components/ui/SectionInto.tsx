import React from "react";

const SectionInto = ({
  heading,
  secondaryHeading,
}: {
  heading: String;
  secondaryHeading: String;
}) => {
  return (
    <div className="text-center text-[#42446E]">
      <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-8">{heading}</h1>
      <p className="text-2xl lg:text-[32px] text-[#42446E] font-medium">{secondaryHeading}</p>
    </div>
  );
};

export default SectionInto;
