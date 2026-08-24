import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
};

const ProjectCard = ({
  title,
  description,
  images,
  technologies,
  github,
  demo,
}: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const goToImage = (index: number) => {
    if (index === currentImage) return;
    setCurrentImage(index);
  };

  return (
    <article className="group relative w-full py-8 md:py-10">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col lg:min-h-[520px] lg:flex-row lg:items-center">
        <div className="relative z-10 w-full lg:w-[68%]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#222529]">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={currentImage}
                mode="sync"
              >
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Imagem ${currentImage + 1} do projeto ${title}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  drag={images.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.85}
                  dragMomentum={true}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(_, info) => {
                    setIsDragging(false);

                    const swipeDistance = 70;
                    const swipeVelocity = 400;

                    if (
                      info.offset.x < -swipeDistance ||
                      info.velocity.x < -swipeVelocity
                    ) {
                      nextImage();
                    } else if (
                      info.offset.x > swipeDistance ||
                      info.velocity.x > swipeVelocity
                    ) {
                      previousImage();
                    }
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -40,
                    transition: {
                      duration: 0.22,
                      ease: [0.4, 0, 1, 1],
                    },
                  }}
                  whileTap={{
                    cursor: "grabbing",
                  }}
                  style={{
                    touchAction: "pan-y",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {images.length > 1 && (
              <>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={previousImage}
                    className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 md:flex"
                    aria-label="Imagem anterior"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextImage}
                    className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 md:flex"
                    aria-label="Próxima imagem"
                  >
                    →
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isDragging) {
                          goToImage(index);
                        }
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentImage
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/40"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
                  {currentImage + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="relative z-20 mt-[-15px] ml-auto w-[92%] rounded-xl border border-white/10 bg-[#1B1D20]/95 p-6 backdrop-blur-xl md:mt-[-60px] md:w-[75%] md:p-8 lg:ml-[-8%] lg:mt-0 lg:w-[42%] lg:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />

            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
              Projeto
            </span>
          </div>

          <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-gray-400">{description}</p>

          <div className="mt-7">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
              Desenvolvido com
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {technologies.map((technology) => (
                <span key={technology} className="text-xs text-gray-300">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-primary"
              >
                GitHub
                <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-primary"
              >
                Visitar projeto
                <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
