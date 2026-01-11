import projectsData from "../data/projects.js";

function Projects() {
  return (
<section
  id="projects"
  data-aos="fade-up"
  className="bg-[#0F172A] text-white scroll-m-24 px-6 pt-24 pb-[48px]"
>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">
        My Projects
      </h2>

      <div className=" max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3" data-aos="zoom-in" >
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#111827] rounded-2xl overflow-hidden
             border border-white/5   shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-cyan-400/30 
                       hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

                <p className="text-sm text-zinc-400 mb-4">
                {project.description}
              </p>

             <h2 className="font-semibold text-lg">Tech Used</h2> 


              <p className="text-sm text-zinc-400 mb-4">
                {project.tech}
              </p>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;