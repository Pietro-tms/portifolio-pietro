const Footer = () => {
  return (
    <footer className="border-t border-t-accent min-w-full bg-background px-4 py-6">
      <div className="w-full md:max-w-[75%] mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-gray-400 font-normal text-sm">
            Designed & Developed by Pietro Strimber
          </h1>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © 2026 Pietro Strimber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
