type TechCardProps = {
  title: string;
  text: string;
  img: string;
};

const TechCard = ({ title, text, img }: TechCardProps) => {
  return (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2 transition-all duration-300 group-hover:bg-primary/10">
        <img
          src={img}
          alt={`Logo ${title}`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <h1 className="text-base font-semibold text-gray-50 md:text-lg">
          {title}
        </h1>

        <p className="mt-1 text-sm font-light leading-relaxed text-gray-400 md:text-base">
          {text}
        </p>
      </div>
    </>
  );
};

export default TechCard;
