"use client";
import HeaderCarousel from "@/components/HeaderCarousel";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  console.log(videos);

  return (
    <div className="sm:ml-[72px] h-full bg-background">
      <HeaderCarousel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Videos videos={videos} />
    </div>
  );
};

export default Home;
