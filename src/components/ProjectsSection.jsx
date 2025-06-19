import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Library Management System",
    description: "The Library Management System is a web application designed to facilitate the management of a library. It provides features for both library patrons and administrators to browse, borrow, and return books, as well as book inventory",
    image: "src/projects/project1.png",
    tags: ["Flask", "CSS", "Javascript","SQL"],
    demoUrl: "https://library-management-system-lac-iota.vercel.app/",
    githubUrl: "https://github.com/ishaa1304/Library-Management-System",
  },
  {
    id: 2,
    title: "Sleep Tunes",
    description:
      "This project combines sleep stage analysis with AI-generated music to create a personalized and calming experience. Based on simulated physiological data, it predicts the user's sleep stage and generates sleep-stage-specific music using Meta’s MusicGen model.",
    image: "src/projects/sleep.jpg",
    tags: ["Gradio", "Python", "TensorFlow/Keras"],
    demoUrl: "#",
    githubUrl: "https://github.com/ishaa1304/Sleep-Tunes-",
  },
   {
     id: 3,
    title: "Cloud Resume Challenge",
    description:
      "A full-stack cloud project hosting my resume as a static site on AWS S3 with a visitor counter backed by Lambda, API Gateway, and DynamoDB. CI/CD set up using GitHub Actions with CloudFront caching.",
    image: "src/projects/cloud-resume.png", // make sure this image exists in your assets
    tags: ["AWS", "React", "Lambda", "CI/CD"],
    demoUrl: "https://dtngue79q3p8c.cloudfront.net",
    githubUrl: "https://github.com/ishaa1304/Isha-Deo-portfolio",
   },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ishaa1304"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
