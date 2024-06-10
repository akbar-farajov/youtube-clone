import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";

const Home = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="flex items-center mt-[66px  ]">
        <LeftSidebar />
        <div>main</div>
      </div>
    </div>
  );
};

export default Home;
