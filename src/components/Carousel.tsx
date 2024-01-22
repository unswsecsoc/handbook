import { getCollection } from "astro:content";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type FC } from "preact/compat";

const allPosts = await getCollection("posts");

const EmblaCarousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className=" p-6 mx-auto max-w-screen-lg">
        <div className=" overflow-hidden " ref={emblaRef}>
          <div className=" flex touch-pan-y">
            {allPosts.map((post) => (
              <a
                href={`/posts/${post.slug}`}
                class=" flex flex-grow-0 flex-shrink-0 basis-1/3 min-w-0 relative hover:scale-105 transition-all box-content rounded-lg from-amber-400 to-sky-700 bg-gradient-to-l"
              >
                <div class=" w-full m-2 dark:bg-black bg-slate-600 p-2">
                  <h2 class=" text-3xl font-bold">{post.data.title}</h2>
                  <p class=" py-2">{post.data.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className=" flex items-center relative w-full">
          <button
            className=" z-10 text-lime-500 flex items-center justify-center cursor-pointer w-16 h-16 embla__button--prev disabled:opacity-30 bg-transparent touch-manipulation border-0 p-o m-0 "
            type="button"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <svg className=" w-3/5 h-3/5 " viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>
          <button
            className=" z-10 text-lime-500 flex items-center justify-center cursor-pointer w-16 h-16 embla__button--prev disabled:opacity-30 bg-transparent touch-manipulation border-0 p-o m-0 "
            type="button"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <svg className=" w-3/5 h-3/5 " viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
