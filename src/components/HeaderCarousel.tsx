import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface HeaderCarouselProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderCarousel = ({
  selectedCategory,
  setSelectedCategory,
}: HeaderCarouselProps) => {
  return (
    <div className="sticky top-[66px] z-30">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full px-10  bg-background py-3"
      >
        <CarouselContent className="flex items-center">
          {categories.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 sm:basis-1/6 md:basis-[15%] lg:basis-[10%]"
              onClick={() => setSelectedCategory(item.name)}
            >
              <div className="p-1">
                <div
                  className="bg-white/10 hover:bg-white/20 border-none cursor-pointer transform duration-300 rounded-lg"
                  style={{
                    background: selectedCategory === item.name ? "white" : "",
                  }}
                >
                  <div className="flex items-center justify-center p-1">
                    <span
                      className="text-sm text-foreground"
                      style={{
                        color: selectedCategory === item.name ? "black" : "",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
