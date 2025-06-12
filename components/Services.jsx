"use client";

import { TbAccessible , TbDeviceLaptop, TbDevices, TbLayoutDashboard, TbCode, TbSearch } from "react-icons/tb";
import Projetos from "../app/projetos/page";

const services = [
  {
    num: "01",
    title: "Design de Interfaces (UI)",
    description:
      "Criação de interfaces modernas, funcionais e visualmente alinhadas com a identidade da marca. Forte foco em hierarquia visual, consistência e atenção aos detalhes.",
    icon: <TbLayoutDashboard />,
  },
  {
    num: "02",
    title: "Acessibilidade e Inclusão Digital",
    description:
      "Projetos que seguem diretrizes WCAG e boas práticas de acessibilidade para garantir experiências inclusivas e compatíveis com tecnologias assistivas.",
    icon: <TbAccessible  />,
  },
  {
    num: "03",
    title: "Prototipação de Alta Fidelidade",
    description:
      "Protótipos realistas para validar fluxos e funcionalidades com usuários e stakeholders, agilizando decisões e reduzindo retrabalho.",
    icon: <TbDeviceLaptop />,
  },
  {
    num: "04",
    title: "Design Responsivo e Mobile-First",
    description:
      "Layouts adaptáveis e otimizados para diferentes tamanhos de tela, com foco em usabilidade e performance em dispositivos móveis.",
    icon: <TbDevices />,
  },
  {
    num: "05",
    title: "Visão Técnica de Produto",
    description:
      "Minha familiaridade com front-end (HTML, CSS, JS, React) permite entregar soluções realistas, melhroando desenvolvimento.",
    icon: <TbCode />,
  },
  {
  num: "06",
  title: "Pesquisa e Experiência do Usuário",
  description:
    "Aplicação de métodos de UX Research para entender as necessidades reais do usuário e orientar decisões centradas em valor e eficiência.",
  icon: <TbSearch />,
}
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center sm:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold">Serviços</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-x-16 mt-8 mb-16 items-start justify-center"
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
                <p className="w-full">{service.description}</p>
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
