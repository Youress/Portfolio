import ProBox from "./ProBox";
import gymate from "../images/GYMATE.webp";
import carrental from "../images/rentalcar.webp";
import creative from "../images/creatives.webp";

function Projects() {
  return (
    <>
      <section id="projects" className="bg-[#f9f9f9] py-60 lg:py-32">
        <div className="container">
          <div className="flex flex-col md:text-center">
            <p className="text-[#147efb] text-3xl uppercase font-bold mb-4">portfolio</p>
            <h3 className="text-4xl text-[#2d2e32] mb-24">Each project is a unique piece of development 🧩</h3>
            <div className="grid grid-cols-1 w-full h-auto gap-20">
              <ProBox
                title="Car Rental"
                img={carrental}
                date="(February 2024)"
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="Tailwind css"
                techno3="React Router ..."
                code="https://github.com/Youress/Rental-Cars"
                demo="https://rentalcarvr1.netlify.app/"
                icon="🚗"
              />

              <ProBox
                title="Gymate"
                date="(January 2024)"
                img={gymate}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="HTML"
                techno2="CSS"
                techno3="JS"
                code="https://github.com/Youress/GYM-FITNESS"
                demo="https://gymfitnessvr1.netlify.app/"
                icon="🏋️"
                cName="flex-row-reverse"
              />

              <ProBox
                title="Agency Landing Page"
                date="(March 2024)"
                img={creative}
                description="With a focus on simplicity and clean design ,replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind."
                techno1="HTML"
                techno2="CSS"
                techno3="JS"
                code="https://github.com/Youress/CreativeScientist"
                demo="https://creativesc1.netlify.app/"
                icon="</>"
                
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
