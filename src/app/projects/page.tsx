import Image from "next/image";
import Link from "next/link";
import React from "react";

type project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
};

let projects: { ui: project[]; software: project[] } = {
  ui: [
    {
      name: "Florel",
      description: "A flower website Ui designed with Figma",
      image: "/plantui.png",
      technologies: ["Figma"],
      url: "https://www.figma.com/design/rp4oDJ7XWsH5z50KwSACUd/Untitled?node-id=0-1&t=LstXrxVJlh5LugzK-1",
    },
    {
      name: "SparkleScrub UI",
      description: "A  website Ui for a cleaning company designed with Figma",
      image: "/sparklescrub.png",
      technologies: ["Figma"],
      url: "https://www.figma.com/design/m8k8KQpaZN6DXGipWBBD99/Untitled?node-id=0-1&t=ZbFy7KElvtMarocd-0",
    },
    {
      name: "Furnichar UI",
      description: "A  website Ui for a furnich company designed with Figma",
      image: "/furnichar.png",
      technologies: ["Figma"],
      url: "https://www.figma.com/design/Te914L3OTQXb2E9JQtK1zV/Untitled?node-id=0-1&t=7edxXdc37ZtESBw9-0",
    },
    {
      name: "Herbal UI",
      description: "A  website Ui for herbal products designed with Figma",
      image: "/herbalui.png",
      technologies: ["Figma"],
      url: "https://www.figma.com/file/EeTZQiqhsiJ6OanfDcDcwh/Untitled?type=design&node-id=0-1&mode=design&t=ksTvfDoJ1BXyH7ZJ-0",
    },
  ],
  software: [
    {
      name: "myScholarshub",
      description:
        "A scholarships listing and management web application.",
      image: "/myScholarshub.png",
      technologies: ["Nextjs", "TailwindCSS", "Typescript","Shadcn UI"],
      url: "https://myscholarshub.vercel.app/",
    },
    {
      name: "Estore",
      description:
        "Ecommerce website and products management system.",
      image: "/estore.png",
      technologies: ["Nextjs", "TailwindCSS", "Typescript","Shadcn UI","Python Django","Postgresql"],
      url: "https://estore-frontend-boqb.vercel.app",
    },
    {
      name: "PolEasy",
      description:
        "A privacy policy sumurisation website",
      image: "/poleasy.png",
      technologies: ["Nextjs", "SASS", "Typescript"],
      url: "https://final-year-project-five-ivory.vercel.app/",
    },
    {
      name: "Portfolio",
      description:
        "My previous portfolio website with some websites I developed whiles still learning to code.",
      image: "/portfolio.png",
      technologies: ["HTML", "CSS", "Reactjs"],
      url: "https://bernarddwumfour.vercel.app",
    },
  ],
};

const page = () => {
  return (
    <main className="min-h-screen pt-12">
      <section id="projects">
        <div className=" pt-20 py-32 lg:px-24 px-3">
        <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              My projects
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Portfolio of Completed Projects: Showcasing My Expertise in Full
              Stack Development
            </p>
          </div>

          <h3 className="pb-6 lg:text-xl text-indigo-600 font-semibold py-4">Ui/Ux projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects &&
              projects.ui.map((project) => (
                <a key={project.name}
                  href={`${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden bg-gray-100  aspect-[5/3] rounded-2xl dark:bg-gray-900">
                    <Image
                      src={project.image}
                      className="object-cover"
                      fill
                      alt={project.name}
                    />
                  </div>
                </a>
              ))}

          </div>
          <div className="h-24"></div>
          <h3 className="pb-6 lg:text-xl text-indigo-600 font-semibold py-4">Web development Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects &&
              projects.software.map((project) => (
                <a key={project.name}
                  href={`${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[5/3] rounded-2xl dark:bg-gray-900">
                    <Image
                      src={project.image}
                      className="object-cover"
                      fill
                      alt={project.name}
                    />
                  </div>
                </a>
              ))}

          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
