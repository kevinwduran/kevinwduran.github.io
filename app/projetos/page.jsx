"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaBehance } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    icon: <FaGithub />,
    category: "Front-End",
    title: "project 1",
    description: "kskssksksks",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/next.svg",
    live: "",
    website: "",
  },
  {
    num: "02",
    icon: <FaBehance />,
    category: "UI Design",
    title: "project 2",
    description: "kskssksksks",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "ReactJS",
      },
    ],
    image: "/next.svg",
    live: "",
    website: "",
  },
];

const Projetos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0 sm:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 items-center">
          <div className="xl:justify-between w-full">
            <div className="flex flex-col gap-8 h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-bold text-outline text-transparent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-primary/80">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-md text-accent border border-accent py-1 px-3 rounded-full"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-primary/10"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project btn */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Acessar projeto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* live project github / behance */}
                <Link href={project.website}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group">
                        <div className="text-3xl group-hover:text-accent">
                          {project.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Acessar projeto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="m-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-red-600">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
