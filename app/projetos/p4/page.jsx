import CustomImage from "../../../components/CustomImage";
import SolucoesCard from "../../../components/SolucoesCard";

const solucoes = [
  {
    title: "Pré-header promocional inteligente",
    text: "Detecta o estado do usuário e mostra as condições de frete grátis, incentivando compras maiores.",
    img: "/assets/FreteGrátis.webp",
    alt: "Pré-header inteligente",
  },
  {
    title: "Indicação de frete grátis no minicart",
    text: "O cliente vê quanto falta para alcançar o frete grátis diretamente no minicart e no carrinho.",
    img: "/assets/minicart.webp",
    alt: "Indicação de frete grátis no minicart",
  },
  {
    title: 'Função "Compre Junto"',
    text: "Adicionamos um módulo de compra combinada, estimulando aumento do ticket médio, inspirado na Amazon.",
    img: "/assets/Compre junto.webp",
    alt: "Compre Junto",
  },
  {
    title: "Checkout reformulado",
    text: "Checkout simplificado, com menos passos, comunicação mais clara e menor fricção no processo de compra.",
    img: "/assets/presentation3sc.jpg",
    alt: "Checkout G Farma",
  },
  {
    title: "Página de Produto remodelada",
    text: "Incluímos informações técnicas, vídeos, gráficos de uso, além de um layout mais limpo e persuasivo.",
    img: "/assets/Single Completa.png",
    alt: "Página de Produto",
  },
  {
    title: "Nova página de parceiros",
    text: "Espaço dedicado aos sócios, como Cariani e Balestrin, além de kits personalizados e conteúdos exclusivos.",
    img: "/assets/Parceiros.webp",
    alt: "Página de parceiros",
  },
  {
    title: "Navegação e busca aprimoradas",
    text: "Otimizamos menus, filtros e implementamos uma busca inteligente, que sugere produtos relevantes de forma mais eficiente.",
    img: "/assets/busca.webp",
    alt: "Busca e navegação",
  },
];

const titleClass = "text-2xl font-semibold mb-8 text-center";
const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
const listItemClass =
  "text-sm text-accent border border-accent py-1 px-3 rounded-full";
const containerClass =
  "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

const infos = [
  { label: "Função", value: "UX/UI Designer" },
  { label: "Duração", value: "3 meses (Fev-Mai 2025)" },
  {
    label: "Ferramentas",
    value: ["Figma", "Photoshop"],
    isList: true,
  },
];

const processos = [
  "Pesquisa de Usuário",
  "Adaptação à novo branding",
  "Wireframes",
  "Prototipação lo-fi e hi-fi",
  "Animações",
  "Acessibilidade",
];

const page = () => {
return (
    <section className="flex items-center flex-col justify-center relative">
      {/* HERO */}
      <div className="mt-8 xl:m-0 relative min-w-[90%] max-h-[20%] bg-gray-300 bg-cover bg-center flex items-center flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 mt-8 h-40 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold text-center">
            E-commerce G Farma
          </h1>
          <p className="text-center">
            Projeto UX/UI
          </p>
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

      {/* TAGS */}
      <ul className="gap-2 flex mt-12 flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        {processos.map((processo) => (
          <li key={processo} className={listItemClass}>
            {processo}
          </li>
        ))}
      </ul>

      {/* SOBRE */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Sobre a G Farma -</h2>
        <p className={paragraphClass}>
          A <strong>G Farma</strong> é uma das maiores farmácias de suplementos
          do Brasil, oferecendo produtos de alta qualidade no segmento de saúde,
          bem-estar e performance. Com a entrada de sócios influentes como{" "}
          <strong>Renato Cariani</strong>, <strong>Julio Balestrin</strong> e{" "}
          <strong>Mauricio</strong>, a empresa iniciou um processo de expansão e
          modernização, refletindo essa nova fase também no ambiente digital.
        </p>
      </div>

      {/* DESAFIO */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Desafio -</h2>
        <p className={paragraphClass}>
          O principal desafio foi entender como uma marca com tanta relevância
          no mercado físico poderia transmitir a mesma confiança, autoridade e
          excelência no ambiente digital. O site antigo apresentava uma
          navegação confusa, não era responsivo em muitos pontos, tinha falhas
          graves no fluxo de compra e não refletia a força da nova fase da G
          Farma.
          <br />
          <br />
          Além disso, existiam problemas claros no checkout, na apresentação dos
          produtos e na falta de estímulos claros para aumentar o ticket médio.
          O projeto exigia uma visão estratégica de negócio, combinada com boas
          práticas de UX/UI, sempre focando na conversão, acessibilidade e na
          criação de uma experiência memorável para o usuário.
        </p>
      </div>

      {/* BENCHMARK */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Benchmark -</h2>
        <p className={paragraphClass + " mb-4"}>
          Realizamos uma análise detalhada de players nacionais e internacionais
          como Growth, Oficial Farma, Amazon e MyProtein. Essa etapa foi
          essencial para entender boas práticas de mercado, além de mapear
          pontos fortes e fracos da concorrência.
        </p>
        <CustomImage
          src="/assets/presentation3sc.jpg"
          alt="Imagem do benchmark realizado para a G Farma"
          className="mx-auto"
        />
      </div>

      {/* SOLUÇÕES */}
      <div className="p-4 md:px-24 pt-16 w-full">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          - Soluções Aplicadas -
        </h2>
        <div className="grid gap-4">
          {solucoes.map(({ title, text, img, alt }, index) => (
            <SolucoesCard
              key={index}
              title={title}
              text={text}
              img={img}
              alt={alt}
            />
          ))}
        </div>
      </div>

      {/* PROTÓTIPOS */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Protótipos Hi-Fi -</h2>
        <p className={paragraphClass + " mb-4"}>
          O novo visual traduz a robustez e modernidade da G Farma, com foco
          total na conversão, clareza e experiência mobile-first.
        </p>
        <CustomImage
          src="/assets/gfarma2.webp"
          alt="Protótipo G Farma"
          className="mx-auto"
        />
        <CustomImage
          src="/assets/presentation3sc.jpg"
          alt="Protótipo G Farma"
          className="mx-auto"
        />
        <a
          target="_blank"
          href="https://www.figma.com/proto/seuprojeto"
          className="hover:text-accent-hover transition-colors"
        >
          Ver Protótipo no Figma
        </a>
      </div>

      {/* DESIGN SYSTEM */}
      <div className={containerClass}>
        <h2 className={titleClass}>- Design System -</h2>
        <p className={paragraphClass + " mb-4"}>
          Criamos um design system robusto, garantindo consistência visual,
          agilidade nas iterações e escalabilidade para futuras implementações.
        </p>
        <CustomImage
          src="/assets/presentation3sc.jpg"
          alt="Design System G Farma"
          className="mx-auto"
        />
      </div>

      {/* APRENDIZADOS */}
      <div className="border border-primary/10 my-16 p-8 rounded-md mx-2">
        <h2 className="text-2xl font-semibold">
          <strong>Meus aprendizados</strong> nesse projeto
        </h2>
        <p className="md:max-w-[50vw] max-w-[90vw] mt-4">
          Esse projeto me proporcionou um aprofundamento enorme na criação de
          experiências digitais orientadas para conversão, além de reforçar a
          importância de escutar o usuário, testar hipóteses e criar soluções
          que impactam diretamente no negócio.
        </p>
        <p className="md:max-w-[50vw] max-w-[90vw] mt-4">
          Aprendi a balancear as necessidades do usuário com os objetivos
          comerciais, entregando não só beleza, mas também performance, clareza
          e uma experiência de alto nível.
        </p>
      </div>
    </section>
  );
};

export default page;
