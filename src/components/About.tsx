import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import pietro from "../assets/pietro.jpeg";

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), {
    stiffness: 300,
    damping: 25,
  });

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [12, -12]), {
    stiffness: 300,
    damping: 25,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center gap-10 bg-background px-4 py-16 md:max-w-[75%] md:gap-14 md:px-6 md:py-24 scroll-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
          Sobre
        </span>

        <h2 className="text-2xl font-semibold text-gray-50 md:text-3xl">
          Quem está por trás do código
        </h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-12 origin-center rounded-full bg-primary"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full max-w-5xl flex-col items-center gap-10 rounded-2xl border border-white/10 bg-surface/40 p-6 shadow-xl shadow-black/10 backdrop-blur-sm md:p-10 lg:flex-row lg:gap-14"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex shrink-0 items-center justify-center"
        >
          <div
            className="relative"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />

            <motion.img
              src={pietro}
              alt="Pietro Strimber"
              className="relative h-40 w-40 rounded-full border-2 border-primary/30 object-cover drop-shadow-[0_0_35px_rgba(52,186,171,0.3)] md:h-56 md:w-56"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-1 flex-col gap-5 text-justify text-gray-400"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base font-normal leading-7 md:text-lg"
          >
            Sou um desenvolvedor FullStack apaixonado por tecnologia.
            Atualmente, curso Engenharia de Software na Universidade Estadual de
            Ponta Grossa — UEPG. Atuo principalmente construindo interfaces web
            modernas com React.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-md font-normal leading-7 md:text-base"
          >
            Além do Front-end, também tenho experiência com Back-end, utilizando
            Node.js e bancos de dados relacionais como PostgreSQL. Também possuo
            conhecimento em Java para desenvolvimento de aplicações desktop,
            tecnologia que utilizei bastante em projetos acadêmicos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base font-normal leading-7 md:text-lg"
          >
            Aprender novas tecnologias não é um desafio para mim, mas sim uma
            oportunidade de crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-2 border-l-2 border-primary pl-4"
          >
            <p className="font-medium leading-6 text-gray-200">
              Se você tem um problema, conte comigo para encontrar uma solução!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
