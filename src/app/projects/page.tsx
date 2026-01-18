import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectType = "ui" | "software";

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  type: ProjectType;
};

const projects: Project[] = [
  {
    name: "Florel",
    description: "A flower website Ui designed with Figma",
    image: "/plantui.png",
    technologies: ["Figma", "Wireframing"],
    url: "https://www.figma.com/design/rp4oDJ7XWsH5z50KwSACUd/Untitled?node-id=0-1&t=LstXrxVJlh5LugzK-1",
    type: "ui"
  },
  {
    name: "SparkleScrub UI",
    description: "A website Ui for a cleaning company designed with Figma",
    image: "/sparklescrub.png",
    technologies: ["Figma", "Wireframing"],
    url: "https://www.figma.com/design/m8k8KQpaZN6DXGipWBBD99/Untitled?node-id=0-1&t=ZbFy7KElvtMarocd-0",
    type: "ui"
  },
  {
    name: "Salon Website",
    description: "A modern salon booking and service management UI designed with Figma.",
    image: "/salon.png",
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping"],
    url: "https://www.figma.com/design/4DXRbTKDdTThPfcdbeOo9H/Untitled?node-id=0-1&t=6jamwAUNh3gLNANf-1",
    type: "ui"
  },
  {
    name: "Furnichar UI",
    description: "A website Ui for a furnich company designed with Figma",
    image: "/furnichar.png",
    technologies: ["Figma", "Wireframing"],
    url: "https://www.figma.com/design/Te914L3OTQXb2E9JQtK1zV/Untitled?node-id=0-1&t=7edxXdc37ZtESBw9-0",
    type: "ui"
  },
  {
    name: "Herbal UI",
    description: "A website Ui for herbal products designed with Figma",
    image: "/herbalui.png",
    technologies: ["Figma", "Wireframing"],
    url: "https://www.figma.com/file/EeTZQiqhsiJ6OanfDcDcwh/Untitled?type=design&node-id=0-1&mode=design&t=ksTvfDoJ1BXyH7ZJ-0",
    type: "ui"
  },
  {
    name: "myScholarshub",
    description: "A scholarships listing and management web application.",
    image: "/myScholarshub.png",
    technologies: ["Nextjs", "TailwindCSS", "Typescript", "Shadcn UI"],
    url: "https://myscholarshub.vercel.app/",
    type: "software"
  },
  {
    name: "Estore",
    description: "Ecommerce website and products management system.",
    image: "/estore.png",
    technologies: ["Nextjs", "TailwindCSS", "Typescript", "Shadcn UI", "Python Django", "Postgresql"],
    url: "https://estore-frontend-boqb.vercel.app",
    type: "software"
  },
  {
    name: "PolEasy",
    description: "A privacy policy summarisation website",
    image: "/poleasy.png",
    technologies: ["Nextjs", "SASS", "Typescript"],
    url: "https://final-year-project-five-ivory.vercel.app/",
    type: "software"
  },
  {
    name: "Portfolio",
    description: "My previous portfolio website with some websites I developed whiles still learning to code.",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS", "Reactjs"],
    url: "https://www.bernarddwumfour.vercel.app",
    type: "software"
  },
];

const ProjectsPage = () => {
  // Filter projects by type
  const uiProjects = projects.filter(project => project.type === "ui");
  const softwareProjects = projects.filter(project => project.type === "software");

  return (
    <main className="min-h-screen pt-12">
      <section
        id="projects"
        className="max-w-[1600px] mx-auto"
      >
        <div className="pt-20 py-32 lg:px-6 px-3">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">
              My projects
            </h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Portfolio of Completed Projects: Showcasing My Expertise in Full Stack Development
            </p>
          </div>

          {/* UI/UX Projects Section */}
          <div className="mb-16">
            <h3 className="pb-6 lg:text-xl text-indigo-600 font-semibold py-4">
              UI/UX Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uiProjects.map((project) => (
                <div
                  key={project.name}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full"
                >
                  {/* Project Type Badge (Always Visible) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.type === "ui"
                      ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      }`}>
                      {project.type === "ui" ? "UI/UX" : "Software"}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-[5/3] dark:bg-gray-900">
                    <Image
                      src={project.image}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      fill
                      alt={project.name}
                    />

                    {/* Hover Overlay with Description and Technologies */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">

                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 mb-4">
                        <h3 className="text-indigo-500 font-semibold text-lg truncate">
                          {project.name}
                        </h3>
                      </div>


                      {/* Description */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 mb-4">
                        <p className="text-white text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Technologies */}
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                                style={{
                                  animationDelay: `${index * 50}ms`,
                                  animationFillMode: "forwards"
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                          aria-label={`View ${project.name} project`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Projects Section */}
          <div>
            <h3 className="pb-6 lg:text-xl text-indigo-600 font-semibold py-4">
              Software Development Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareProjects.map((project) => (
                <div
                  key={project.name}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full"
                >
                  {/* Project Type Badge (Always Visible) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.type === "ui"
                      ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      }`}>
                      {project.type === "ui" ? "UI/UX" : "Software"}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-[5/3] dark:bg-gray-900">
                    <Image
                      src={project.image}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      fill
                      alt={project.name}
                    />

                    {/* Hover Overlay with Description and Technologies */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">

                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 mb-4">
                        <h3 className="text-indigo-500 font-semibold text-lg truncate">
                          {project.name}
                        </h3>
                      </div>


                      {/* Description */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 mb-4">
                        <p className="text-white text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Technologies */}
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                                style={{
                                  animationDelay: `${index * 50}ms`,
                                  animationFillMode: "forwards"
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                          aria-label={`View ${project.name} project`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;