import Image from "next/image";
import ProfilePic from "images/profile-pic.jpg";

const HeroSection = () => {
  return (
    <div className="my-[50px] lg:my-[100px] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-16">
        <div className="font-bold leading-[70px] text-[#42446E] text-center">
          <h1 className="text-3xl lg:text-5xl lg:mb-6 font-black">
            Frontend Web Developer
          </h1>
          <p className="text-3xl lg:text-2xl font-light">
            I code beautifully simply things, and I love what i do.
          </p>
        </div>
      </div>
      <Image
        className="h-52 w-52 rounded-full border-4 border-[#7367D3]"
        src={ProfilePic}
        alt="Profile Image"
        placeholder="blur"
      />
    </div>
  );
};

export default HeroSection;
