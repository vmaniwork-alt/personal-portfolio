import { FaDownload,FaEye } from "react-icons/fa";
import profile from "../assets/Hero/M1.jpg"
const About = () => {
  return (
  <section
  id="about"
  data-aos="fade-up"
  className="bg-[#0F172A] text-white py-20 md:py-32 px-6 min-h-screen scroll-mt-24">


      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">
          About Me
        </h2>
        <div className=" md:flex justify-between px-5 md:gap-x-52">
    <div
    className="w-[280px] h-[280px] md:w-[380px] md:h-[380px]
               rounded-full border-4 border-cyan-400
               overflow-hidden flex-shrink-0 " data-aos="zoom-in" >
    <img
      src={profile}
      alt="Mani"
      className="w-full h-full object-contain block"
    />
  </div>

          <div className="mt-6 md:mt-0">
               {/* Intro */}


                <p className="text-gray-300 leading-relaxed mb-6">
          I’m <span className="text-cyan-400 font-semibold">Mani</span>, 
I have completed my B.Sc.Computer Science at G.T.N. Arts College, Dindigul,
 graduating in 2024. Currently, 
 I am a MERN Full Stack Developer with hands-on experience in
  React.js, Tailwind CSS, Node.js, Express, MongoDB, and Firebase.
        </p>




        <p className="text-gray-300 leading-relaxed mb-6">
           a
          frontend developer passionate about building clean, responsive, and
          user-friendly web interfaces. I enjoy turning designs into interactive
          experiences using modern frontend technologies.
        </p>

        <p className="text-gray-300 leading-relaxed mb-10">
          I focus on writing clean, reusable code and creating smooth UI
          experiences. I continuously improve my skills by building real-world
          projects and learning best practices.
        </p>
        

        {/* Content Grid */}
        <div className="grid md:grid-cols-1 gap-10">
          {/* What I Do */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              What I Do
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Responsive UI Development</li>
              <li>• React Component Design</li>
              <li>• API Integration</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Tech Stack
            </h3>
            <p className="text-gray-300 leading-relaxed">
              React vite • JavaScript(E6) • HTML5 • CSS3 • Tailwind • Nodejs • Expressjs • MongoDB<br />

            </p>
            <div className="flex mt-7 gap-4">
              <a
                href="/Mani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 border border-cyan-400 text-cyan-400 rounded-full flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaEye/> View CV
              </a>


              <a
                href="/Mani_Resume.pdf"
                download
                className="h-12 px-6 border border-cyan-400 text-cyan-400 rounded-full flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </div>
        </div>
       
          </div>
          


        </div>

       
     
      </div>
    
    </section>
  )
}

export default About
