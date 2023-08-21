import Image from "next/image";
import ProfilePic from "images/profile-pic.jpg";

const HeroSection = () => {
  return (
    <div className="my-[50px] lg:my-[100px] flex flex-col justify-center items-center">
      <Image
        className="h-52 w-52 lg:h-80 lg:w-80 rounded-full border-4 border-[#7367D3] mb-10"
        src={ProfilePic}
        alt="Profile Image"
        placeholder="blur"
      />
      <div className="flex justify-center items-center ">
        <div className="font-bold leading-[70px] text-[#42446E] text-center">
          <h1 className="text-3xl lg:text-5xl lg:mb-8">
            Hi👋,
            <br /> My name is
            <br />
            <span className="text-[#7367D3] text-4xl lg:text-6xl">
              Talha Imran
            </span>
            <br />
          </h1>
          <h1 className="text-3xl lg:text-5xl">I build things for web.</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
