import Waving from "../images/waving.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,tailwind",
    id: 3,
  },
];

function Hero() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col w-full h-[100vh] bg-[#f9f9f9] relative xmd:h-auto xmd:py-44"
      >
        <div className="container">
          <div className="flex justify-center items-center gap-40 h-[65rem] relative xmd:flex-col xmd:text-center xmd:h-auto xmd:gap-12 ">
            <div className="flex justify-center items-center relative gap-40 xmd:gap-12 xmd:h-auto xmd:text-center xmd:flex-col-reverse">
              <div className="flex flex-col max-w-4xl relative">
                <h1 className="text-8xl font-bold my-8">Front-End React Developer</h1>
                <img
                  src={Waving}
                  alt="waving_hand"
                  className="absolute  w-24 h-24 top-[8.7rem] right-52 xmd:right-12 sm:right-16 "
                />
                <p className="text-3xl font-medium text-[#555555] font-mulish">
                  Hi, I&apos;m Youssef Essouairi. A passionate Front-end React
                  Developer based in Morocco, Rabat. 📍
                </p>
                <span className="flex gap-5 my-10 cursor-pointer md:justify-center md:items-center">
                  <a
                    className="text-5xl text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]"
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/youssef-essouairi-3809771bb/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    className="text-5xl text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]"
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Youress"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="bg-hero w-[35rem] h-[35rem] bg-cover bg-center bg-no-repeat border-4 border-solid border-[#2d2e32] rounded-round-spin relative transition-all duration-100 ease-in-out animate-spino sm:w-[28rem] sm:h-[28rem]"></div>
            </div>

            <div className="flex text-2xl text-[#767676] items-center absolute bottom-0 left-0 xmd:flex-col xmd:static">
              <p className=" text-3xl mr-28 pr-8 border-gray-500  font-mulish font-semibold text-[#2d2e32] xmd:mr-0 xmd:mb-12 border-r-2 xmd:border-none xmd:pr-0 xmd:pb-4">
                Tech Stack
              </p>
              <div className="logos">
                <ul className="flex flex-wrap gap-12 xmd:justify-center">
                  {skillsIcons.map((icon) => (
                    <li className="cursor-pointer" key={icon.id}>
                      <img
                        src={icon.img}
                        alt="skill-icon"
                        className="w-44 h-20 transition-all ease-in-out duration-300 hover:-translate-y-4"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
