import ProjectCard from "./ProjectCard";
import homeCasaDoHamburguer from "../assets/home-casa-do-hamburguer.png";
import home2CasaDoHamburguer from "../assets/home2-casa-do-hamburguer.png";
import homeAdmCasaDoHamburguer from "../assets/home-adm-casa-do-hamburguer.png";
import loginCasaDoHamburguer from "../assets/login-casa-do-hamburguer.png";
import cadastroCasaDoHamburguer from "../assets/cadastro-casa-do-hamburguer.png";
import pedidosCasaDoHamburguer from "../assets/pedidos-casa-do-hamburguer.png";
import homeVacinakids from "../assets/home-vacinakids.png";
import campanhasVaconakids from "../assets/campanhas-vacinakids.png";
import criancasVaconakids from "../assets/criancas-vacinakids.png";
import historicoVaconakids from "../assets/historico-vacinakids.png";
import recipeRb from "../assets/recipe-rb.png";
import searchRb from "../assets/search-rb.png";
import recipesRb from "../assets/recipes-rb.png";

import { motion } from "motion/react";

const Projects = () => {
  return (
    <section
      className="flex flex-col w-full md:max-w-[75%] justify-center items-center bg-background md:p-6 p-4 md:gap-12 md:mt-30 mt-10 gap-5 scroll-mt-20"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="flex flex-col justify-center items-center gap-3"
      >
        <h1 className="text-md font-medium uppercase tracking-[0.20em] text-gray-400">
          Trabalho
        </h1>

        <h2 className="md:text-3xl text-2xl font-semibold text-center text-gray-50">
          Projetos Selecionados
        </h2>

        <h3 className="text-lg font-normal text-gray-400 text-center">
          Soluções reais e projetos pessoais. Conheça meu trabalho.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <ProjectCard
            title="Casa do Hamburguer"
            description="Aplicação web de vendas de produtos para hamburgueria. Conta com cardápio digital, gerência de pedidos e painel administrador"
            images={[
              homeCasaDoHamburguer,
              home2CasaDoHamburguer,
              homeAdmCasaDoHamburguer,
              loginCasaDoHamburguer,
              cadastroCasaDoHamburguer,
              pedidosCasaDoHamburguer,
            ]}
            technologies={[
              "React",
              "Typescript",
              "Node",
              "Express",
              "JWT",
              "Bcrypt",
              "Postgres",
              "Prisma",
            ]}
            github="https://github.com/Pietro-tms/casa-do-hamburguer"
            key={1}
          />

          <ProjectCard
            title="VacinaKids"
            description="Interface de um sistema de controle da situação vacinal dos filhos de uma família. O projeto conta com histórico de vacinas aplicadas, alertas de atraso e campanhas ativas."
            images={[
              homeVacinakids,
              campanhasVaconakids,
              criancasVaconakids,
              historicoVaconakids,
            ]}
            technologies={["Angular", "Typescript", "Ionic"]}
            github="https://github.com/Pietro-tms/vacinacao-infantil"
            demo="https://vacina-kids.netlify.app"
            key={2}
          />
          <ProjectCard
            title="Recipe Finder"
            description="Buscador de receitas que consome dados dA API TheMealDB."
            images={[searchRb, recipeRb, recipesRb]}
            technologies={["HTML", "CSS", "JavaScript","Fetch"]}
            github="https://github.com/Pietro-tms/Buscador-de-receitas"
            demo="https://pietro-tms.github.io/Buscador-de-receitas/"
            key={3}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
