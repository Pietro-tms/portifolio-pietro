import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react"

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background mt-0 w-full md:p-6 text-gray-400 font-light flex justify-center items-center p-4 fixed z-50 shadow-accent border-b-accent border-b">
      <div className="flex flex-row w-full md:w-[75%] bg-background justify-between items-center">
        <div className="flex flex-row items-center gap-1 cursor-pointer hover:font-bold transition duration-300">
        <a href="#pietro" className="flex flex-row items-center gap-1">
          <h1 className="text-gray-50 font-semibold">Pietro</h1>
          <h1 className="text-gray-400 font-semibold">Strimber</h1>
        </a>
      </div>
      <ul className="hidden items-center gap-8 lg:flex">
        <li className="hover:text-gray-50 transition-colors duration-200">
          <a href="#about">Sobre</a>
        </li>

        <li className="hover:text-gray-50 transition-colors duration-200">
          <a href="#skills">Tecnologias</a>
        </li>
        <li className="hover:text-gray-50 transition-colors duration-200">
          <a href="#projects">Projetos</a>
        </li>
        <li className="hover:text-gray-50 transition-colors duration-200">
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <button
        className="lg:hidden border border-accent p-1.5 rounded-full"
        onClick={() => setOpen(!open)}
      >
        {!open ? <Menu/> : <X /> }
      </button>

      {open && (
        <div className="absolute top-20 right-6 w-56 rounded-2xl border border-white/10 bg-surface p-4 shadow-xl lg:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Tecnologias</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
};

export default NavBar;
