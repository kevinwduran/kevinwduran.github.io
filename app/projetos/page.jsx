// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight } from "react-icons/bs";
// import { FaGithub, FaBehance } from "react-icons/fa";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../../components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "../../components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "UX Design",
//     title: "Padaria Bom Apetite",
//     description:
//       "Projeto de UX Design para um aplicativo de vendas e entregas para uma padaria.",
//     stack: [
//       {
//         name: "Figma",
//       },
//       {
//         name: "UX Design",
//       },
//       {
//         name: "UCD",
//       },
//       {
//         name: "Design Thinking",
//       },
//     ],
//     image: "/assets/Intersect.png",
//     live: "/projetos/p1",
//   },
//   {
//     num: "02",
//     icon: <FaGithub />,
//     category: "Design e Programação Web",
//     title: "Meu Portfólio Pessoal",
//     description:
//       "Portfólio pessoal onde consegui colocar em prática os conhecimentos adquiridos de Design e de Programação Web. O projeto foi feito desde o protótipo (Figma) até o código.",
//     stack: [
//       {
//         name: "Next JS",
//       },
//       {
//         name: "Tailwind CSS",
//       },
//       {
//         name: "Figma",
//       },
//       {
//         name: "Illustrator",
//       },
//     ],
//     image: "/assets/portfolio.png",
//     live: "/projetos/p2",
//     website: "https://github.com/kevinwduran/kevinwduran.github.io",
//   },
//   {
//     num: "03",
//     icon: <FaGithub />,
//     category: "UI Design e Programação Web",
//     title: "Sistema Ferragens Negrão",
//     description:
//       "Projeto acadêmico em parceria com a Ferragens Negrão, desenvolvendo um sistema completo de controle de remanufatura. Meu papel incluiu a prototipagem do sistema, assegurando a identidade visual da marca e aplicando princípios de UI/UX Design para garantir usabilidade tanto em dispositivos móveis quanto em desktop. Também fui responsável pela programação front-end do projeto.",
//     stack: [
//       {
//         name: "HTML 5",
//       },
//       {
//         name: "CSS 3",
//       },
//       {
//         name: "Bootstrap",
//       },
//       {
//         name: "JavaScript",
//       },
//       {
//         name: "Figma",
//       },
//     ],
//     image: "/assets/apresentação login mobile.jpg",
//     live: "/projetos/p3",
//     website:
//       "https://github.com/kevinwduran/Sistema-Ferragens-negrao/tree/main",
//   },
// ];

// const Projetos = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const project = projects[currentIndex];

//   const handleSlideChange = (swiper) => {
//     setCurrentIndex(swiper.activeIndex);
//   };

//   return (
//     <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0 sm:px-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 items-center">
//           <div className="xl:justify-between w-full">
//             <div className="flex flex-col gap-4 h-[50%]">
//               {/* outline num */}
//               <div className="flex justify-between items-center">
//                 <div className="text-8xl leading-none font-bold text-outline text-transparent">
//                   {project.num}
//                 </div>
//                 <p className="text-primary/50">{project.category}</p>
//               </div>

//               {/* project category */}
//               <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
//                 {project.title}
//               </h2>
//               {/* description */}
//               <p className="text-primary/80">{project.description}</p>
//               {/* stack */}
//               <ul className="gap-2 flex flex-wrap">
//                 {project.stack.map((item, index) => (
//                   <li
//                     key={index}
//                     className="text-md text-accent border border-accent py-1 px-3 rounded-full"
//                   >
//                     {item.name}
//                   </li>
//                 ))}
//               </ul>
//               {/* border */}
//               <div className="border border-primary/10"></div>
//               {/* buttons */}
//               <div className="flex items-center gap-4">
//                 {/* live project btn */}
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group">
//                         <BsArrowUpRight className="text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Ver mais detalhes</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//                 {/* live project github / behance */}
//                 {project.website && (
//                   <Link href={project.website} target="_blank">
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group">
//                           <div className="text-3xl group-hover:text-accent">
//                             {project.icon}
//                           </div>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Acessar projeto</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="m-12"
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index) => (
//                 <SwiperSlide key={index} className="w-full">
//                   <div className="h-[460px] relative group flex justify-center items-center bg-white">
//                     {/* overlay */}
//                     <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 rounded-md z-10"></div>
//                     {/* image */}
//                     <div className="relative w-full h-full">
//                       <Image
//                         src={project.image}
//                         fill
//                         className="object-contain"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//               {/* buttons */}
//               <WorkSliderBtns
//                 containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//                 btnStyles="bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
//               />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projetos;

"use client";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "UX Design",
    title: "Padaria Bom Apetite",
    description:
      "Projeto de UX Design para um aplicativo de vendas e entregas para uma padaria.",
    stack: ["Figma", "UX Design", "UCD", "Design Thinking"],
    image: "/assets/Intersect.png",
    live: "/projetos/p1",
  },
  {
    num: "02",
    icon: <FaGithub />,
    category: "Design e Programação Web",
    title: "Meu Portfólio Pessoal",
    description:
      "Portfólio pessoal onde consegui colocar em prática os conhecimentos adquiridos de Design e de Programação Web.",
    stack: ["Next JS", "Tailwind CSS", "Figma", "Illustrator"],
    image: "/assets/portfolio.png",
    live: "/projetos/p2",
    website: "https://github.com/kevinwduran/kevinwduran.github.io",
  },
  {
    num: "03",
    icon: <FaGithub />,
    category: "UI Design e Programação Web",
    title: "Sistema Ferragens Negrão",
    description:
      "Projeto acadêmico em parceria com a Ferragens Negrão, desenvolvendo um sistema completo de controle de remanufatura.",
    stack: ["HTML 5", "CSS 3", "Bootstrap", "JavaScript", "Figma"],
    image: "/assets/apresentação login mobile.jpg",
    live: "/projetos/p3",
    website: "https://github.com/kevinwduran/Sistema-Ferragens-negrao/tree/main",
  },
];

const Projetos = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0 sm:px-12">
      <div className="container mx-auto grid gap-8 xl:py-4">
        {projects.map((project, index) => (
          <div key={index} className="grid xl:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="md:text-8xl text-6xl font-bold text-outline text-transparent">
                  {project.num}
                </div>
                <p className="text-primary/50">{project.category}</p>
              </div>
              <h2 className="text-3xl font-bold capitalize">{project.title}</h2>
              <p className="text-primary/80">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, i) => (
                  <li
                    key={i}
                    className="text-md text-accent border border-accent py-1 px-3 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-primary/10"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver mais detalhes</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.website && (
                  <Link href={project.website} target="_blank">
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
                )}
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="h-[460px] relative group flex justify-center items-center bg-white rounded-md">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 rounded-md z-10"></div>
                <Image
                  src={project.image}
                  width={600}
                  height={460}
                  className="object-contain"
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
