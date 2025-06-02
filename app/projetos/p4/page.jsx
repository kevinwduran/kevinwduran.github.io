import { FiDownload } from "react-icons/fi";
import { Button } from "../../../components/ui/button";
import CustomImage from "../../../components/CustomImage";
import { BiSolidRightArrow } from "react-icons/bi";

const page = () => {
  const titleClass = "text-2xl font-semibold mb-8";
  const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
  const containerClass =
    "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

  return (
    <section className="flex items-center flex-col justify-center relative">
      {/* HERO - Mantido conforme combinado */}
      <div className="mt-8 xl:m-0 relative min-w-[100%] h-[20%] bg-[url('/assets/Intersect.png')] bg-cover bg-center flex items-center flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 h-60 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold">
            G Farma Suplementos
          </h1>
          <p className="text-center">Projeto UX/UI Design</p>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Função</p>
            <p className="font-semibold w-[35vw]">UX/UI Designer</p>
          </div>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Duração</p>
            <p className="font-semibold w-[35vw]">
              3 meses (Nov 2024 - Jan 2025)
            </p>
          </div>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Ferramentas</p>
            <ul className="font-semibold w-[35vw]">
              <li>Figma</li>
              <li>Caneta e Papel</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TAGS */}
      <ul className="gap-2 flex flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Benchmark nacional e internacional
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Mapeamento de dores e oportunidades
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Wireframes
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Protótipos Hi-Fi
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Testes de Usabilidade
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Design System
        </li>
      </ul>

      {/* DOWNLOAD */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-4">
        <a href="/assets/ProjetoGFarma.pdf" download>
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 max-w-[80vw]"
          >
            <span>Apresentação Projeto</span>
            <FiDownload className="text-xl" />
          </Button>
        </a>
      </div>

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
          src="/assets/benchmarkGFarma.jpg"
          alt="Imagem do benchmark realizado para a G Farma"
          className="mx-auto"
        />
      </div>
<div className={containerClass}>
  <h2 className={titleClass}>- Soluções Aplicadas -</h2>
  <div className="flex flex-col gap-6 max-w-[90vw] md:max-w-[65vw]">
    {[
      {
        title: "Pré-header promocional inteligente",
        text: "Detecta o estado do usuário e mostra as condições de frete grátis, incentivando compras maiores.",
        img: "/assets/preheader.jpg",
        alt: "Pré-header inteligente"
      },
      {
        title: "Indicação de frete grátis no minicart",
        text: "O cliente vê quanto falta para alcançar o frete grátis diretamente no minicart e no carrinho.",
        img: "/assets/minicart.jpg",
        alt: "Indicação de frete grátis no minicart"
      },
      {
        title: "Função \"Compre Junto\"",
        text: "Adicionamos um módulo de compra combinada, estimulando aumento do ticket médio, inspirado na Amazon.",
        img: "/assets/comprejunto.jpg",
        alt: "Compre Junto"
      },
      {
        title: "Checkout reformulado",
        text: "Checkout simplificado, com menos passos, comunicação mais clara e menor fricção no processo de compra.",
        img: "/assets/checkout.jpg",
        alt: "Checkout G Farma"
      },
      {
        title: "Página de Produto remodelada",
        text: "Incluímos informações técnicas, vídeos, gráficos de uso, além de um layout mais limpo e persuasivo.",
        img: "/assets/pdp.jpg",
        alt: "Página de Produto"
      },
      {
        title: "Nova página de parceiros",
        text: "Espaço dedicado aos sócios, como Cariani e Balestrin, além de kits personalizados e conteúdos exclusivos.",
        img: "/assets/parceiros.jpg",
        alt: "Página de parceiros"
      },
      {
        title: "Navegação e busca aprimoradas",
        text: "Otimizamos menus, filtros e implementamos uma busca inteligente, que sugere produtos relevantes de forma mais eficiente.",
        img: "/assets/busca.jpg",
        alt: "Busca e navegação"
      },
    ].map((item, index) => (
      <div
        key={index}
        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:h-52">
          {/* Coluna Texto */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm md:text-base">{item.text}</p>
          </div>

          {/* Coluna Imagem */}
          <div className="h-full w-full flex items-center justify-center">
            <CustomImage
              src={item.img}
              alt={item.alt}
              className="max-h-[180px] object-contain"
            />
          </div>
        </div>
      </div>
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
          src="/assets/prototipo1.jpg"
          alt="Protótipo G Farma"
          className="mx-auto"
        />
        <CustomImage
          src="/assets/prototipo2.jpg"
          alt="Protótipo G Farma"
          className="mx-auto"
        />
        <a
          target="_blank"
          href="https://www.figma.com/proto/seuprojeto"
          className=" hover:text-accent-hover transition-colors"
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
          src="/assets/designsystemgf.jpg"
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
