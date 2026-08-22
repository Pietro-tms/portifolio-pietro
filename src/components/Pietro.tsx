import notebook from "../assets/notebook.png";
import IconTec from "./IconTec";
import Button from "./Button";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";
import { motion } from "motion/react";

const Pietro = () => {
  return (
    <section
      className="flex flex-row w-full md:max-w-[75%] justify-center items-center mt-20 bg-background md:p-6 p-4 md:gap-10 scroll-m-20"
      id="pietro"
    >
      <motion.div
        className="flex flex-col flex-1 gap-6 md:gap-7 max-w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          className="flex flex-col gap-2 md:gap-4"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center itens-start gap-1 md:gap-4 md:text-7xl font-semibold text-5xl mt-2">
            <h1 className="text-gray-50">Pietro</h1>

            <h1 className="text-primary">Strimber</h1>
          </div>

          <p className="font-semibold text-gray-400 text-lg md:text-xl">
            Desenvolvedor Web FullStack
          </p>
        </motion.div>

        <motion.p
          className="text-md md:text-base font-normal text-gray-400"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          Mais do que desenvolver código, busco criar soluções que resolvam
          problemas reais. Acredito que a tecnologia deve gerar valor, facilitar
          experiências e produzir resultados que façam a diferença.
        </motion.p>

        <motion.div
          className="flex flex-row gap-2 md:gap-4 max-w-full flex-wrap"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <IconTec title="TypeScript" />
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <IconTec title="React" />
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <IconTec title="Node.js" />
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <IconTec title="PostgreSQL" />
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <IconTec title="Java" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-row gap-2 md:gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.a
            href="#projects"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Button title="Ver Projetos" variant="outline" img={arrow} />
          </motion.a>

          <motion.div whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Button
              title="GitHub"
              img={github}
              link="https://github.com/Pietro-tms"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:flex flex-1 justify-center items-center"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={notebook}
          alt="Notebook"
          className="max-h-full max-w-4xs drop-shadow-[0_0_40px_rgba(52,186,171,0.35)]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Pietro;
