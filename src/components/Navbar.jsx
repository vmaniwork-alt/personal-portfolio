import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617] backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-300">
          Mani<span className="text-cyan-400">V</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-400 font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 hover:underline">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 hover:underline">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 hover:underline">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#020617] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            <a href="#home" onClick={() => setOpen(false)}className="hover:text-cyan-400 hover:underline">Home</a>
            <a href="#about" onClick={() => setOpen(false)}className="hover:text-cyan-400 hover:underline">About</a>
            <a href="#skills" onClick={() => setOpen(false)}className="hover:text-cyan-400 hover:underline">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}className="hover:text-cyan-400 hover:underline">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}className="hover:text-cyan-400 hover:underline">Contact</a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;