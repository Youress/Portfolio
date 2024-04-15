import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="py-32 bg-white lg:py-28" id="about">
        <div className="container">
          <div className="grid grid-cols-2 justify-center items-center lg:grid-cols-1 lg:text-center">
            <div className="relative ">
              <img src={WorkingEmoji} alt="emoji" className="absolute z-10 w-24 bottom-[35px] right-[98px] lg:bottom-10 lg:right-[245px] xmd:bottom-[57px] xmd:right-[156px] md:hidden" />
              <img src={AboutImg} alt="mee" className="w-[41rem] h-[35rem] rounded-md lg:mb-12 sm:w-[90%] sm:h-auto mx-auto" />
              <span className="w-[19rem] h-[19rem] absolute bg-white bottom-[-33px] right-[33px] rounded-full lg:w-[17rem] lg:h-[17rem] lg:bottom-[-3px] lg:right-[190px] xmd:bottom-[-3px] xmd:right-[100px] md:hidden animate-spino1">
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="pr-6 lg:max-w-[54rem] lg:my-0 lg:mx-auto sm:pr-0">
              <h3 className="text-3xl text-[#147efb] uppercase font-bold mb-4">About me</h3>
              <h4 className="text-4xl mb-8 text-[#2d2e32] font-popin">
                Front-end Developer <br /> based in Morocco, Temara 📍
              </h4>
              <p className="text-3xl font-mulish text-[#767676] font-medium ">
                Hey, my name is Youssef, and I&apos;m a Frontend Developer. My passion
                is to create and develop a clean UI/UX for my users.
                <br />
                <br />
                My main stack currently is React in combination with
                Tailwind CSS and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
