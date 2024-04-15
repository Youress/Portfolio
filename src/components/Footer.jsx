import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer className="bg-[#2d2e32] py-20 w-full">
        <div className="container">
          <div className="flex justify-between items-center sm:gap-8 sm:text-center sm:flex-wrap sm:justify-center">
            <h3 className="text-white text-3xl">
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="flex gap-8 items-center justify-center mt-4 text-white">
              <a
              className="text-3xl hover:scale-125 transition-all duration-75 ease-in-out"
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/youssef-essouairi-3809771bb/"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
              className="text-3xl hover:scale-125 transition-all duration-75 ease-in-out"
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Youress"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
