import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background w-full md:p-5 md:w-[70%] text-gray-400 font-light flex justify-between items-center p-4 position-fixed top-0 z-50">
      <div className="flex flex-row items-center gap-1">
        <h1 className="text-gray-50 font-semibold">Pietro</h1>
        <h1 className="text-gray-400 font-semibold">Stimber</h1>
      </div>
      <ul className="hidden items-center gap-8 lg:flex">
        <li className="hover:text-gray-50 transition-colors duration-300">
          <a href="#about">Sobre</a>
        </li>
        <li className="hover:text-gray-50 transition-colors duration-300">
          <a href="#projects">Projetos</a>
        </li>
        <li className="hover:text-gray-50 transition-colors duration-300">
          <a href="#skills">Tecnologias</a>
        </li>
        <li className="hover:text-gray-50 transition-colors duration-300"   >
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
    </nav>
  );
};

export default NavBar;
