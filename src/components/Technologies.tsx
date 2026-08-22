import TechCard from "./TechCard";
import c from "../assets/c.png";
import cpp from "../assets/C++.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import postgres from "../assets/postgrees.png";
import prisma from "../assets/prisma.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import { motion } from "motion/react";
import jwt from '../assets/jwt.png'

const Technologies = () => {
  return (
    <section
      className="flex flex-col w-full md:max-w-[75%] justify-center items-center bg-background md:p-6 p-4 md:gap-12 md:mt-30 mt-10 gap-5 scroll-mt-20"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center gap-3"
      >
        <h1 className="text-md font-medium uppercase tracking-[0.20em] text-gray-400">
          Stack
        </h1>

        <h2 className="md:text-3xl text-2xl font-semibold text-center text-gray-50">
          Tecnologias
        </h2>

        <h3 className="text-lg font-normal text-gray-400 text-center">
          Ferramentas que utilizo para transformar ideias em projetos reais
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {[
          {
            title: "JavaScript",
            text: "Base sólida em ES6+ e assincronismo",
            img: javascript,
          },
          {
            title: "TypeScript",
            text: "Tipagem estática e código seguro",
            img: typescript,
          },
          {
            title: "C",
            text: "Conhecimentos em programação estruturada",
            img: c,
          },
          {
            title: "C++",
            text: "Estruturas de dados",
            img: cpp,
          },
          {
            title: "Express.js",
            text: "Construção de APIs RESTful com Node.js",
            img: express,
          },
          {
            title: "Git",
            text: "Controle de versão e gerenciamento de projetos",
            img: git,
          },
          {
            title: "GitHub",
            text: "Versionamento, colaboração e hospedagem de projetos",
            img: github,
          },
          {
            title: "Java",
            text: "Programação orientada a objetos",
            img: java,
          },
          {
            title: "Node.js",
            text: "Desenvolvimento de APIs e aplicações backend",
            img: node,
          },
          {
            title: "PostgreSQL",
            text: "Modelagem e gerenciamento de bancos relacionais",
            img: postgres,
          },
          {
            title: "Prisma",
            text: "ORM para integração e manipulação de bancos de dados",
            img: prisma,
          },
          {
            title: "Python",
            text: "Conhecimentos em programação e desenvolvimento",
            img: python,
          },
          {
            title: "React",
            text: "Desenvolvimento de interfaces modernas e responsivas",
            img: react,
          },
          {
            title: "Tailwind CSS",
            text: "Estilização de interfaces com classes utilitárias",
            img: tailwind,
          },
          {
            title: "JWT",
            text: "Gerenciamento de autenticação e autorização de usuários em APIs",
            img: jwt
          }
        ].map((tech) => (
          <motion.div
            key={tech.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
            className="group flex flex-row items-center gap-4 rounded-xl border border-white/10 bg-surface/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface hover:shadow-lg hover:shadow-primary/5 md:min-w-90"
          >
            <TechCard title={tech.title} text={tech.text} img={tech.img} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
