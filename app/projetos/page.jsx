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
    category: "UI/UX Design e Programação Web",
    title: "Sistema Ferragens Negrão",
    description:
      "Projeto acadêmico em parceria com a empresa Ferragens Negrão, desenvolvendo um sistema completo de controle de remanufatura.",
    stack: ["HTML 5", "CSS 3", "Bootstrap", "JavaScript", "Figma"],
    image: "/assets/apresentação login mobile.jpg",
    live: "/projetos/p3",
  },
  {
    num: "04",
    category: "UI/UX Design",
    title: "E-commerce G Farma",
    description:
      "Projeto de novo site para a farmácia G Farma.",
    stack: ["UI Design", "UCD", "UX Design", "Figma"],
    image: "/assets/gfarma1.png",
    live: "/projetos/p4",
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
              <div className="h-[400px] md:h-[460px] w-full relative group flex justify-center items-center bg-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/5 z-10"></div>
                <Image
                  src={project.image}
                  fill
                  className="object-contain"
                  alt={project.title}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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