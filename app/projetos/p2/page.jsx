import CustomImage from "../../../components/CustomImage";

const titleClass = "text-2xl font-semibold mb-8 text-center";
const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
const listItemClass =
  "text-sm text-accent border border-accent py-1 px-3 rounded-full";
const containerClass =
  "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

const infos = [
  { label: "Função", value: "Dev Front-End e UX/UI Designer" },
  { label: "Duração", value: "2 meses (Ago-Out 2024)" },
  {
    label: "Tecnologias",
    value: ["Adobe XD", "Next JS", "Tailwind CSS", "Shadcn UI"],
    isList: true,
  },
];

const processos = [
  "Tailwind com Next JS",
  "Processo Criativo",
  "Design Responsivo",
];

const Page = () => {

  return (
    <section className="flex items-center flex-col justify-center relative">
      <div className="mt-8 xl:m-0 relative min-w-[100%] max-h-[20%] bg-gray-300 bg-cover bg-center flex items-center flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 h-60 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold">Meu portfólio pessoal</h1>
          <p className="text-center">UI/UX Design e Programação Web</p>
        </div>
        {infos.map((item) => (
          <div key={item.label} className="flex z-10">
            <div className="flex gap-4">
              <p className="text-right w-[35vw]">{item.label}</p>
              {item.isList ? (
                <ul className="font-semibold w-[35vw]">
                  {item.value.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-semibold w-[35vw]">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <ul className="gap-2 flex mt-12 flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        {processos.map((processo) => (
          <li key={processo} className={listItemClass}>
            {processo}
          </li>
        ))}
      </ul>

      {/* SOBRE */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Sobre o Projeto -</h2>
        <p className={paragraphClass}>
          Meu portfólio pessoal foi criado para apresentar minha experiência e
          habilidades em UI/UX Design e Desenvolvimento Web. Ele foi projetado
          para oferecer uma navegação intuitiva e destacar meus principais
          projetos e competências.
        </p>
      </div>

      {/* OBJETIVO */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Objetivo -</h2>
        <p className={paragraphClass}>
          Criar um portfólio profissional, visualmente atrativo e funcional,
          que demonstre minhas habilidades e experiência no mercado.
        </p>
      </div>

      {/* LOGO */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Logo -</h2>
        <p className={paragraphClass}>
          Um dos primeiros passos ao projetar meu portfólio foi fazer o design
          de um logotipo para engajar minha marca. Este processo foi difícil,
          pois tive que me habituar ao Adobe Illustrator.
        </p>
        <p className={paragraphClass}>
          Após alguns rabiscos e esboços no papel, fui para o software e
          comecei a fazer a logo usando a técnica de grid. E este foi o
          resultado:
        </p>
      </div>

      <CustomImage
        src="/assets/logoAI.png"
        alt="Imagem do Portfólio"
        height="285px"
        className="mx-auto"
        objectFit="contain"
      />

      {/* RESULTADOS */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Resultados -</h2>
        <p className={paragraphClass}>
          O portfólio se tornou uma peça essencial para apresentar meus
          trabalhos e destacar minha experiência na área, proporcionando uma boa
          experiência ao usuário e facilitando a navegação.
        </p>
      </div>

      <CustomImage
        src="/assets/heroDesk.png"
        alt="Imagem do Portfólio"
        height="285px"
        className="mx-auto"
        objectFit="contain"
      />
      <CustomImage
        src="/assets/projetosDesk.png"
        alt="Imagem do Portfólio"
        height="285px"
        className="mx-auto"
        objectFit="contain"
      />

      {/* RESPONSIVIDADE */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Responsividade -</h2>
        <p className={paragraphClass}>
          A responsividade também foi um princípio crucial, para que todos que
          acessem o portfólio possam ter uma boa experiência.
        </p>
      </div>

      <CustomImage
        src="/assets/responsive.png"
        alt="Imagem do Portfólio"
        className="mx-auto"
        objectFit="cover"
      />
    </section>
  );
};

export default Page;
