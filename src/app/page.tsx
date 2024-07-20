"use client";
import HeaderCarousel from "@/components/HeaderCarousel";
import LeftSidebar from "@/components/LeftSidebar";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import { useEffect, useState } from "react";
import Loading from "./loading";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        // Geçerli videoları filtreleme
        const validVideos = data.items.filter(
          (item: any) =>
            item.id.videoId &&
            item.snippet &&
            item.snippet.thumbnails &&
            item.snippet.thumbnails.medium.url
        );
        setVideos(validVideos);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
        setError("Failed to fetch videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
