"use client";
import HeaderCarousel from "@/components/HeaderCarousel";
import LeftSidebar from "@/components/LeftSidebar";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="h-full bg-background">
      <div className="">
        <LeftSidebar />
        <div className="sm:ml-[72px]">
          <HeaderCarousel
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Home;
