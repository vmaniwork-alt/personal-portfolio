import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
  <section
  id="contact"
  data-aos="fade-up"
  className="min-h-screen bg-[#0F172A]
  text-white flex items-center justify-center scroll-m-24 px-6 py-20 md:py-28"
>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Let’s build something meaningful together.  
            Feel free to reach out for opportunities or collaborations.
          </p>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={20} />
              <span>vmani.work@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" size={20} />
              <span>+91 63829 47283</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" size={20} />
              <span>Dindigul, Tamil Nadu, India</span>
            </div>
          </div>
             <div className="flex  md:justify-start gap-6 text-2xl mt-10 md:mt-20">
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
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    
    
      
    </section>
    
  );
};

export default Contact;