"use client";

import { TbUserCode, TbDeviceLaptop, TbDevices } from "react-icons/tb";
import Projetos from "../app/projetos/page";

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description: "Desenvolvimento de interfaces intuitivas e agradáveis, focadas na experiência do usuário, maximizando sua usabilidade e satisfação.",
    icon: <TbUserCode />,
  },
  {
    num: "02",
    title: "Design de Prototipação",
    description: "Criação de protótipos interativos de alta fidelidade para validar ideias e melhorar a comunicação com stakeholders.",
    icon: <TbDeviceLaptop />,
  },
  {
    num: "03",
    title: "Design Responsivo",
    description: "Desenvolvimento de layouts adaptáveis para diferentes dispositivos, garantindo uma experiência consistente em desktop, tablet e mobile.",
    icon: <TbDevices />,
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold">Serviços</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mt-8 mb-8 items-start justify-center"
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
                {/* <div className="border-b border-primary/10 w-full flex"></div> */}
              </div>
            );
          })}
        </div>
        <h1 className="text-4xl font-semibold">Alguns de meus projetos</h1>
        <Projetos />
      </div>
    </section>
  );
};

export default Services;
