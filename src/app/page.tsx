import React, { ReactNode } from "react";
import Button from "./components/Button";
import Image from "next/image";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import Link from "next/link";

let skills: { skill: string; image: ReactNode }[] = [
  { skill: "HTML", image: <FaHtml5 /> },
  { skill: "CSS", image: <FaCss3 /> },
  { skill: "Javascript", image: <DiJavascript /> },
  { skill: "Typescript", image: <SiTypescript /> },
  { skill: "TailwindCSS", image: <BiLogoTailwindCss /> },
  { skill: "SASS", image: <FaSass /> },
  { skill: "ReactJs", image: <FaReact /> },
  { skill: "NextJs", image: <RiNextjsFill /> },
  { skill: "PHP", image: <FaPhp /> },
  { skill: "Laravel", image: <FaLaravel /> },
  { skill: "Figma", image: <FaFigma /> },
];

let projects: {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}[] = [
  {
    name: "Florel",
    description: "A flower website Ui designed with Figma",
    image: "/plantui.png",
    technologies: ["Figma"],
    url: "https://www.figma.com/design/rp4oDJ7XWsH5z50KwSACUd/Untitled?node-id=0-1&t=uq5xTFgBtajguovh-0",
  },
  {
    name: "Herbal UI",
    description: "A  website Ui for herbal products designed with Figma",
    image: "/herbalui.png",
    technologies: ["Figma"],
    url: "https://www.figma.com/file/EeTZQiqhsiJ6OanfDcDcwh/Untitled?type=design&node-id=0-1&mode=design&t=ksTvfDoJ1BXyH7ZJ-0",
  },
  {
    name: "Foodis",
    description:
      "A Restaurant website built with Nextjs, tailwindCSS and Typescript",
    image: "/foodies.png",
    technologies: ["Nextjs", "TaiilwindCSS", "Typescript"],
    url: "foodies-liard.vercel.app",
  },
  {
    name: "Portfolio",
    description:
      "My previous portfolio website with some websites I developed whiles still learning to code.",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS", "Reactjs"],
    url: "bernarddwumfour.vercel.app",
  },
];

const page = () => {
  let dark = true;
  return (
    <main className="dark:bg-darkbg min-h-screen">
      <section
        id="hero"
        className="text-center relative py-12 md:py-36 lg:px-16 px-3 md:px-12 flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center overflow-hidden"
      >
        <div className="circle w-96 h-96 absolute -top-8 -left-8 rounded-full opacity-40 bg-indigo-700 blur-[180px] z-0 ">
          {" "}
        </div>
        <div className="circle w-96 h-96 absolute -bottom-8 -right-8 rounded-full opacity-20 bg-indigo-600 blur-3xl z-0 ">
          {" "}
        </div>
        <div className="py-40 pt-32 flex items-center flex-col w-full relative z-10">
          <h1 className="text-3xl lg:text-[4.5rem] text-indigo-500 leading-[150%] font-bold ">
            Hi , I&apos;m Bernard
          </h1>
          <p className="py-3 dark:text-gray-300 text-gray-600 text-[1.05rem] md:text-xl">
            A passionate Product Designer And Fullstack Developer dedicated to
            crafting engaging and dynamic web applications.
          </p>
          <p className="text-md pb-4 dark:text-gray-500 text-gray-500">
            Let&apos;s build something amazing together!
          </p>

          <a href="#">
            <Button>Download CV</Button>
          </a>
        </div>

        {/* <div className="relative image h-[450px] md:h-[550px] lg:h-[600px] origin-center rounded-2xl w-full lg:w-1/2">
          <Image
            src={"/hero.png"}
            alt="heroimage"
            fill
            className="object-cover"
          />
        </div> */}
      </section>

      <section id="projects">
        <div className="py-12 md:py-32 lg:px-24 px-4 md:px-10">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              My projects
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Portfolio of Completed Projects: Showcasing My Expertise in Full
              Stack Development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects &&
              projects.map((project) => (
                <a key={project.name}
                  href={`http://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
                    <Image
                      src={project.image}
                      className="object-cover"
                      fill
                      alt={project.name}
                    />
                  </div>
                </a>
              ))}
            <Link href="/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="py-12 md:py-32 lg:px-24 px-4 md:px-10">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              About Me
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Dynamic Full Stack Developer and Problem Solver.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            <div className="bg-gray-100 relative overflow-hidden h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image
                className=" object-cover"
                src={"/about.jpeg"}
                fill
                alt="flowerui"
              />
            </div>

            <div className="">
              <p className="text-sm lg:text-md leading-7 lg:leading-8 md:px-6 text-gray-500 dark:text-gray-200">
                I am a passionate Full Stack Developer with experience in
                building dynamic and user-friendly web applications. Skilled in
                HTML, CSS, JavaScript, React.js, Next.js, PHP, Laravel, and
                MySQL, I thrive on creating innovative solutions. As a Product
                Designer proficient in Figma and Photoshop, I bring a keen eye
                for design to create cohesive and visually appealing user
                experiences. Let&apos;s build something amazing together!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="py-12 md:py-32 lg:px-24 px-4 md:px-10">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              My Skills
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Skills and Expertise in Fullstack Web Development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {skills &&
              skills.map((skill) => (
                <div
                  className="flex gap-4 items-center bg-white rounded-lg px-2 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] dark:bg-darkerbg "
                  key={skill.skill}
                >
                  <span className="p-3 lg:p-5 text-white bg-indigo-600 rounded-md text-xl lg:text-4xl">
                    {skill.image}
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {skill.skill}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="py-12 md:py-32 lg:px-24 px-4 md:px-10">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              Contact Me
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Contact Me for Collaboration and Opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="form">
              <form action="">
                <div className="flex flex-col-reverse gap-1">
                  <input
                    type="text"
                    name="name"
                    className="border-gray-200 rounded-lg outline-none border-2 focus:border-indigo-300 p-2 dark:outline-none dark:border-gray-800 dark:focus:border-indigo-500 dark:bg-darkerbg"
                  />
                  <label
                    htmlFor="name"
                    className=" dark:text-gray-300 text-gray-600 mt-3 text-sm"
                  >
                    Your name
                  </label>
                </div>

                <div className="flex flex-col-reverse gap-1">
                  <input
                    type="text"
                    name="name"
                    className="border-gray-200 rounded-lg outline-none border-2 focus:border-indigo-300 p-2 dark:outline-none dark:border-gray-800 dark:focus:border-indigo-500 dark:bg-darkerbg"
                  />
                  <label
                    htmlFor="name"
                    className=" dark:text-gray-300 text-gray-600 mt-3 text-sm"
                  >
                    Your email
                  </label>
                </div>

                <div className="flex flex-col-reverse gap-1 mb-6">
                  <textarea
                    name="name"
                    className="border-gray-200 rounded-lg outline-none border-2 focus:border-indigo-300 p-2 dark:outline-none dark:border-gray-800 dark:focus:border-indigo-500 dark:bg-darkerbg resize-none h-24"
                  ></textarea>
                  <label
                    htmlFor="name"
                    className=" dark:text-gray-300 text-gray-600 mt-3 text-sm"
                  >
                    Your name
                  </label>
                </div>

                <Button>send Message</Button>
              </form>
            </div>

            <div className="bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900 relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.026338478856!2d-0.19587219308806253!3d5.64993214364426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1716835348943!5m2!1sen!2sgh"  style={{border:0,position : "absolute",width :"100%",height : "100%"}}  loading="lazy" ></iframe>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
