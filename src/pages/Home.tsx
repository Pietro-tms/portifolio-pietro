import Pietro from "../components/Pietro";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="bg-background text-primary flex flex-col items-center h-full w-screen ">
      <NavBar />
      <Pietro />
      
    </div>
  );
};

export default Home;
