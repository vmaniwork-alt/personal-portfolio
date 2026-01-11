import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaServer, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiMongodb, SiFirebase } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb"; // Vercel icon
import { DiVisualstudio } from "react-icons/di"; // VS Code alternative

const Skills = () => {
  return (
 <section
  id="skills"
  data-aos="fade-up"
  className="bg-[#0F172A] text-white px-6 pt-20 pb-20 min-h-screen scroll-m-24"
>


      <div className="max-w-6xl mx-auto" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="bg-[#111827] border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-300  text-lg">
              <li className="flex items-center gap-2"><FaHtml5 className="text-orange-600"/> HTML5</li>
              <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-600"/> CSS3</li>
              <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400"/> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400"/> Tailwind CSS</li>
              <li className="flex items-center gap-2"><FaReact className="text-cyan-400"/> React</li>
              <li className="flex items-center gap-2"><SiVite className="text-purple-500"/> Vite</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#111827] border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-600"/> Node.js</li>
              <li className="flex items-center gap-2"><FaServer className="text-gray-400"/> Express.js</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-500"/> MongoDB</li>
              <li className="flex items-center gap-2"><FaCode className="text-gray-400"/> REST APIs</li>
              <li className="flex items-center gap-2"><SiFirebase className="text-yellow-400"/> Firebase</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-[#111827] border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li className="flex items-center gap-2"><FaGitAlt className="text-orange-600"/> Git</li>
              <li className="flex items-center gap-2"><FaGithub className="text-white"/> GitHub</li>
              <li className="flex items-center gap-2"><DiVisualstudio className="text-blue-500"/> VS Code</li>
              <li className="flex items-center gap-2"><FaServer className="text-gray-400"/> Render</li>
              <li className="flex items-center gap-2"><TbBrandVercel className="text-white"/> Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
