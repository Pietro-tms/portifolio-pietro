type IconTecProps = {
  title: string;
};

const IconTec = ({ title }: IconTecProps) => {
  return (
    <div className="flex flex-row items-center rounded-full bg-surface border-accent border-1 p-2 px-4 text-xs font-sans hover:border-primary transition-discrete duration-300">
      <h1>{title}</h1>
    </div>
  );
};

export default IconTec;
