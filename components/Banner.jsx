import React, { useState, useEffect } from "react";
import Image from "next/image";
import {FaPlay} from 'react-icons/fa';
import { InformationCircleIcon } from "@heroicons/react/solid";

function Banner({ netflixOriginals }) {
  const [movieBanner, setMovieBanner] = useState(null);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setMovieBanner(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={
            `${BASE_URL}${movieBanner?.backdrop_path || movieBanner?.poster_path}` ||
            `${BASE_URL}${movieBanner?.poster_path}`
          }
          layout="fill"
          objectFit="cover"
          alt="banner-image"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold ">{movieBanner?.title|| movieBanner?.name}</h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movieBanner?.overview}</p>
      <div className="flex space-x-3">
          <button className="flex items-center gap-x-2 rounded  px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl bg-white text-black">
             <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play
          </button>
          <button className="flex items-center gap-x-2 rounded  px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl bg-[gray]/70">
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>  More Info
          </button>
      </div>
    </div>
  );
};

export default Banner;
