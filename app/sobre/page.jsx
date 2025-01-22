"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop, SiBootstrap } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const about = {
  title: "Sobre mim",
  description: `Atualmente, trabalho como assistente administrativo na multinacional thyssenkrupp. Estou estudando Engenharia de Software na UniSenaiPR desde 2022, com previsão de término em 2025. Tenho familiaridade com programação, especialmente no desenvolvimento web, e sou apaixonado por UI e UX design. Acredito que uma boa interface não só torna um produto visualmente atrativo, mas também essencial para proporcionar uma experiência envolvente e intuitiva para o usuário.
    
    Tenho dedicado tempo significativo ao estudo de UX design, buscando entender como interfaces bem projetadas podem melhorar a usabilidade e a satisfação do usuário. Estou comprometido em criar produtos que não só atendam às necessidades dos usuários, mas que também encantem e inspirem. 
    
    Adoraria ouvir de você!`,
  info: [
    {
      fieldName: "Celular",
      fieldValue: "(41) 99970-5960",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglês - Avançado",
    },
  ],
};

const experience = {
  title: "Experiência",
  items: [
    {
      company: "Domatech Software House",
      position: "Estagiário de UI/UX Design",
      duration: "10/2024 - Presente",
    },
    {
      company: "thyssenkrupp Steering Brasil",
      position: "Assistente Administrativo",
      duration: "03/2023 - 10/2024",
    },
  ],
};

const education = {
  icon: "as",
  title: "Educação",
  items: [
    {
      instituion: "Engenharia de Software",
      degree: "Bacharel em Engenharia de Software",
      duration: "02/2022 - 12/2025",
    },
    {
      instituion: "SENAI",
      degree: "Técnico em Desenvolvimento de Sistemas",
      duration: "06/2019 - 12/2020",
    },
    {
      instituion: "Coursera",
      degree: "Google UX Design",
      duration: "06/2024 - 01/2025",
    },
    {
      instituion: "Origamid",
      degree:
        "Cursos: React Completo, JavaScript ES6, HTML e CSS, UI Design e Heurísticas de Nielsen",
      duration: "2023-2024",
    },
  ],
};

const skills = {
  title: "Tecnologias",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illustrator",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Sobre = () => {
  return (
    <section className="flex min-w-full justify-center">
      <div className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-6 mt-16"
          >
            <TabsList className="flex flex-col mx-auto gap-4">
              <TabsTrigger value="about">Sobre mim</TabsTrigger>
              <TabsTrigger value="education">Educação</TabsTrigger>
              <TabsTrigger value="skills">Tecnologias</TabsTrigger>
              <TabsTrigger value="experience">Experiência</TabsTrigger>
            </TabsList>

            {/* sobre */}
            <div className="min-h-[100vh] w-full flex">
              <TabsContent value="about">
                <div className="flex flex-col  gap-4">
                  <h3 className="text-4xl font-bold text-center xl:text-left">
                    {about.title}
                  </h3>
                  <div className="max-w-[600px]">
                    <p className="font-semibold">Olá, me chamo Kevin.</p>
                    <p className="text-primary/85 text-sm">
                      Eu sou um apaixonado por criar produtos cuidadosamente
                      elaborados e focados na experiência do usuário.
                      Atualmente, sou Estagiário de UX/UI Design na Domatech,
                      uma startup de tecnologia onde contribuo para a criação de
                      soluções inovadoras e centradas no usuário.
                      <br />
                      <br />
                      Tenho experiência prática no desenvolvimento web e um
                      profundo interesse por design de interfaces e
                      experiências. Além disso, estudei Engenharia de Software
                      na UniSenaiPR desde 2022, com conclusão prevista para
                      2025, o que me proporciona uma sólida base técnica para
                      combinar design e funcionalidade.
                      <br />
                      <br />
                      Trabalhei anteriormente como Assistente Administrativo em
                      uma multinacional, a thyssenkrupp, onde desenvolvi
                      habilidades organizacionais e um olhar analítico, que
                      agora aplico ao design e à resolução de problemas
                      complexos.
                      <br />
                      <br />
                      Sou movido pela crença de que uma boa interface não apenas
                      torna um produto visualmente atraente, mas também é
                      crucial para criar experiências envolventes e intuitivas
                      para os usuários. Dedico-me a estudar e aplicar práticas
                      de UX design, sempre buscando projetar soluções que
                      superem as expectativas e proporcionem valor real.
                      <br />
                      <br />
                      Meu compromisso é entregar produtos que encantem, inspirem
                      e resolvam problemas de maneira eficaz. 
                      Estou animado para colaborar e transformar ideias em
                      experiências impactantes! Vamos conversar? {" "}
                      <a
                        className="cursor-pointer text-accent hover:text-accent-hover"
                        href="mailto:kevinwillianduran@gmail.com"
                      >
                        kevinwillianduran@gmail.com !
                      </a>
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="border border-primary/10 min-w-[300px] max-w-[300px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start"
                      >
                        <span className="text-accent font-medium">
                          {item.fieldName}
                        </span>
                        <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                          {item.fieldValue}
                        </h3>
                      </li>
                    );
                  })}
                </ul>
              </TabsContent>
              {/* educação */}
              <TabsContent value="education">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <ScrollArea className="h-[400px] mt-6">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary/10 py-6 min-w-[300px] max-w-[300px] px-10 rounded-md flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-medium">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[12px] h-[4px] bg-accent"></span>
                            <p className="text-primary/80">{item.instituion}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-6">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full min-w-[138px] h-[138px] bg-primary/10 rounded-md flex justify-center items-center group">
                              <div
                                className={
                                  "text-6xl group-hover:text-accent transition-all duration-300"
                                }
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </TabsContent>
              {/* experiência */}
              <TabsContent value="experience">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>
                <ScrollArea className="h-[400px] mt-6">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary/10 min-w-[300px] max-w-[300px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent font-medium">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[12px] h-[4px] bg-accent"></span>
                            <p className="text-primary/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
