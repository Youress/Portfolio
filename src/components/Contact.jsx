import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="bg-white py-44 lg:py-32">
        <div className="container">
          <div className="flex flex-col">
            <div className="sm:text-center">
              <p className="text-[#147efb] uppercase font-bold text-3xl mb-4">contact</p>
              <h3 className="text-[#2d2e32] text-4xl font-bold">Don&apos;t be shy! Hit me up! 👇</h3>
            </div>
            <div className="flex gap-32 flex-wrap mt-24 sm:flex-col sm:gap-20 sm:text-center sm:justify-center">
              <div className="flex items-center gap-6 sm:flex-col">
                <span className="bg-white w-20 flex items-center justify-center h-20 text-[#147efb] rounded-full  shadow-1xl">
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl text-[#2d2e32]">Location</h3>
                  <p className="text-3xl text-[#767676] cursor-pointer hover:text-[#147efb] transition-all duration-300">Morocco, Rabat</p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:flex-col">
                <span className="bg-white w-20 flex items-center justify-center h-20 text-[#147efb] rounded-full  shadow-1xl">
                  <IconMail width={30} height={30} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl text-[#2d2e32]">Mail</h3>
                  <a className="text-3xl text-[#767676] cursor-pointer hover:text-[#147efb] transition-all duration-300" href="mailto:web@youssefessouairi.website">
                    web@youssefessouairi.website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
