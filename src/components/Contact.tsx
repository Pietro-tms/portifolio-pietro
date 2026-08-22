import Button from "./Button";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import { motion } from "motion/react";

function Contact() {
  return (
    <section
      className="flex flex-col w-full md:max-w-[75%] justify-center mb-10 md:mb-20 items-center bg-background md:p-6 p-4 md:gap-12 md:mt-30 mt-10 gap-5 scroll-mt-30"
      id="contact"
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
          Contato
        </h1>

        <h2 className="md:text-3xl text-2xl font-semibold text-center text-gray-50">
          Vamos construir algo juntos
        </h2>

        <h3 className="text-lg font-normal text-gray-400 text-center">
          Aberto a oportunidades, freelas e colaborações em produtos digitais.
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
        >
          <Button
            title="WhatsApp"
            img={whatsapp}
            link="https://wa.me/14998894309?text=Olá,%20Pietro!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
        >
          <Button
            title="Instagram"
            img={instagram}
            link="https://instagram.com/pietro_tm_strimber"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
        >
          <Button
            title="LinkedIn"
            img={linkedin}
            link="https://linkedin.com/in/pietro-tani-morais-strimber-198250260"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
        >
          <Button
            title="Email"
            img={gmail}
            link="mailto:strimberpietro@gmail.com"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
