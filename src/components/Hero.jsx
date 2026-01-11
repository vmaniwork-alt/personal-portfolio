import Animated from "../components/Type";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import profile from "../assets/Hero/M1.jpg";

const Hero = () => {
  return (
    <section
      id="home"   // ✅ IMPORTANT: must match Navbar #home
      data-aos="fade-up"
      className="min-h-screen flex justify-center items-center scroll-mt-24 bg-[#0F172A] text-white px-6"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-36">

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-52 h-52 md:w-96 md:h-96 rounded-full object-contain border-4 border-cyan-400"
        />

        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-400">
            MERN <span className="text-white">Stack Developer</span>
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-cyan-400">Mani</span>
          </h2>

          <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            <Animated />
          </h3>

          <p className="max-w-xl text-slate-400 text-sm md:text-base mb-8">
            I build modern, responsive web apps with React and Tailwind,
            turning ideas into seamless user experiences. Always learning,
            coding, and improving.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/vmaniwork-alt"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition
                         hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mani-v-"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition
                         hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/916382947283?text=Hello%20Mani"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition
                         hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-10">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full bg-cyan-400/10 text-cyan-300
                         border border-cyan-400/30 transition
                         hover:bg-transparent
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Connect with Me
            </button>

            <a
              href="/Mani_Resume.pdf"
              download
              className="px-6 py-3 rounded-full flex items-center gap-2
                         border border-cyan-400/30 text-cyan-300 transition
                         hover:bg-cyan-400/20
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
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
