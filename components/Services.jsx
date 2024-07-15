"use client";

import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    description: "Criação de sites responsivos e otimizados, utilizando as mais recentes tecnologias para garantir uma experiência de usuário rápida e eficiente.",
    icon: <FaLaptopCode />,
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Desenvolvimento de interfaces intuitivas e agradáveis, focadas na experiência do usuário maximizando sua usabilidade e a satisfação.",
    icon: <TbUserCode />,
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Criação de logos únicos e memoráveis que refletem a identidade da sua marca, garantindo um impacto visual forte e duradouro.",
    icon: <MdOutlineDesignServices />,
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold">Serviços</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 items-start justify-center"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="w-[52px] h-[52px] rounded-full group-hover:text-accent flex justify-center items-center text-[24px] bg-primary/10 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold leading-none">
                  {service.title}
                </h2>
                {/* descrição */}
                <p className="max-w-[18rem]">{service.description}</p>
                {/* border */}
                <div className="border-b border-primary/10 w-full flex"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
