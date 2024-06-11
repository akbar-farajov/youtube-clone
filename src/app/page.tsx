"use client";
import HeaderCarousel from "@/components/HeaderCarousel";
import VideoCard from "@/components/VideoCard";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import Link from "next/link";
import { useEffect, useState } from "react";

const title =
  " 2Pac, Pop Smoke - Write This Down ft. Biggie, DMX, Eazy E Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg";

const author = "John";
const year = 1;
const view = "15mln";
const image =
  "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="sm:ml-[72px] h-full bg-background">
      <HeaderCarousel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 px-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Link href="#" key={i}>
            <VideoCard
              title={title}
              author={author}
              year={year}
              view={view}
              image={image}
            />
          </Link>
        ))}
      </div> */}
      <Videos videos={videos} />
    </div>
  );
};

export default Home;
