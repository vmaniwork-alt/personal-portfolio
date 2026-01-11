import Animated from "../components/Type";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import profile from "../assets/Hero/M1.jpg";

const Hero = () => {
  return (
    <section id="hero" data-aos="fade-up" className="min-h-screen flex justify-center  scroll-m-24 bg-[#0F172A] text-white px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 mt-5 md:mt-0 md:gap-36">
         {/* Profile Image  */}
        <img
          src={profile}
          alt="Profile"
          className="w-52 h-52 md:w-96 md:h-96 rounded-full object-contain border-4 border-cyan-400"
        />

        {/* Content */}
        <div className="text-center md:text-left">
           <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
            MERN  <span className="text-white">Stack Developer</span>
          </h1>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, i'm <span className="text-cyan-400">Mani</span>
          </h1>

     <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
  <Animated />
</h2>

         
          <p className="max-w-xl text-slate-400 text-sm md:text-base mb-8">
        I build modern, responsive web apps with React and Tailwind, turning ideas into seamless user experiences. Always learning, coding, and improving.
      </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/vmaniwork-alt"
              target="_blank"
            className="text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mani-v-"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/916382947283?text=Hello%20Mani"
              target="_blank"
        className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] text-2xl transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-row md:flex-row items-center gap-4 mt-10 px-3 md:px-0 md:mt-6">
           <button
  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
  className="px-6 py-3 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30
  hover:bg-transparent hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition"
>
  Connect with Me
</button>

            <a
              href="/Mani_Resume.pdf"
              download
              className="h-12 px-6  py-3 border bg-transparent text-cyan-300 border-cyan-400/30  rounded-full flex items-center justify-center
               gap-2 hover:bg-cyan-400/20 hover:text-cyan-300 transition hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
