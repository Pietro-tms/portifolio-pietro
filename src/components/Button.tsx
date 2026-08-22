type ButtonProps = {
  title?: string;
  img?: string;
  variant?: "default" | "outline";
  link?: string;
};
const Button = ({ title, img, variant = "default", link }: ButtonProps) => {
  const buttonVariants = {
    default:
      "flex flex-row items-center rounded-full bg-surface border border-gray-400 p-3 px-6 text-md text-gray-50 font-medium hover:border-gray-50 hover:text-white transition duration-300 cursor-pointer",

    outline:
      "flex flex-row items-center rounded-full bg-primary text-black p-3 px-5 text-md font-medium hover:bg-primary-light transition duration-300 cursor-pointer",
  };

  return (
    <a
      className={buttonVariants[variant]}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {variant === "default" && (
        <>
          {img && (
            <img src={img} alt={title} className="md:w-6 md:h-6 w-5 h-5 mr-2" />
          )}{" "}
          {title}
        </>
      )}
      {variant === "outline" && (
        <>
          {title}{" "}
          {img && (
            <img src={img} alt={title} className="md:w-6 md:h-6 w-5 h-5 ml-3" />
          )}
        </>
      )}
    </a>
  );
};

export default Button;
