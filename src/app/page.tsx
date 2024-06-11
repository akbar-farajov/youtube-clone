import YoutubeCard from "@/components/YoutubeCard";
import Link from "next/link";
const title =
  " 2Pac, Pop Smoke - Write This Down ft. Biggie, DMX, Eazy E Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg";

const author = "John";
const year = 1;
const view = "15mln";
const image =
  "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390";

const Home = () => {
  return (
    <div className="ml-[72px] h-full max-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 px-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Link href="/cscs" key={i}>
          <YoutubeCard
            title={title}
            author={author}
            year={year}
            view={view}
            image={image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
