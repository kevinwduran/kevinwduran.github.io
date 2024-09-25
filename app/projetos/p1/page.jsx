import { FiDownload } from "react-icons/fi";
import { Button } from "../../../components/ui/button";
import CustomImage from "../../../components/CustomImage";
import { BiSolidRightArrow } from "react-icons/bi";

const page = () => {
  return (
    <section className="flex items-center flex-col justify-center">
      <div className="mt-8 xl:m-0 relative min-w-[100%] h-[20%] bg-[url('/assets/Intersect.png')] bg-cover bg-center flex items-center flex-col justify-center">
        {/* Gradiente de cima para baixo, começando transparente e indo até branco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 h-60 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold">
            Padaria Bom Apetite
          </h1>
          <p className="text-center">Projeto UX Design</p>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Função</p>
            <p className="font-semibold w-[35vw]">UX/UI Designer</p>
          </div>
        </div>

        <div className="flex z-10 ">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Duração</p>
            <p className="font-semibold w-[35vw]">2 meses (Ago-Out 2024)</p>
          </div>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Ferramentas</p>
            <ul className="font-semibold w-[35vw]">
              <li>Caneta e Papel</li>
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="gap-2 flex flex-wrap z-10 max-w-[40vw] justify-center">
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Entrevistas
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Pesquisas Quantitativas e Qualitativas
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Objetivos e Hipóteses
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Personas
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          User Flows
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Wireframes
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Protótipos Lo-Fi
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Testes de Usabilidade
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Formulário SUS
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Feedback e Iteração
        </li>
        <li className="text-sm text-accent border border-accent py-1 px-3 rounded-full">
          Design System
        </li>
      </ul>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-4">
        <a
          href="/assets/ProjetoBomApetite.pptx
              "
          download
        >
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

      <div className="flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16">
        <h2 className="text-2xl font-semibold mb-8">- Sobre a Bom Apetite -</h2>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center">
          A Bom Apetite é uma padaria moderna focada em oferecer produtos
          frescos e de alta qualidade. Com um atendimento rápido e
          personalizado, busca atender as necessidades dos clientes que
          valorizam praticidade e sabor, oferecendo uma experiência ágil através
          de seu novo aplicativo de vendas móveis, facilitando o pedido e
          retirada de produtos de maneira eficiente.
        </p>
      </div>

      <div className="flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16">
        <h2 className="text-2xl font-semibold mb-8">- Desafio -</h2>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center">
          Como podemos garantir produtos de qualidade, eficiência e facilidade
          nos pedidos de nossos clientes através de um novo aplicativo?
        </p>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center mt-2">
          A padaria Bom Apetite, com o novo aplicativo, busca rapidez em seu dia
          a dia, satisfazendo seus clientes, sobretudo aqueles que possuem pouco
          tempo. Atualmente, pedidos são realizados apenas de forma presencial.
        </p>
      </div>

      <div className="flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16">
        <h2 className="text-2xl font-semibold mb-8">- Solução -</h2>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center">
          Criar um protótipo de alta fidelidade a fim de atender o desafio
          proposto, garantindo um aplicativo com clientes satisfeitos.
        </p>
      </div>

      <CustomImage
        src="/assets/presentation3sc.jpg"
        alt="Imagem com borda animada"
        className="mx-auto"
      />

      <div className="flex items-center flex-col justify-center p-0 md:px-24 md:pb-0 pt-8">
        <h2 className="text-2xl font-semibold mb-8">- Descoberta -</h2>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center">
          Com uma análise de mercado e objetivos definidos, criei as personas
          dos usuários da <strong>Bom Apetite</strong>. A partir delas,
          identifiquei as principais dificuldades dos clientes e comecei a
          planejar soluções para melhorar a experiência, como notificações de
          ofertas e acompanhamento do pedido em tempo real.
        </p>
      </div>

      <CustomImage
        src="/assets/Persona1.png"
        alt="Imagem com borda animada sobre a primeira persona do estudo de descoberta"
        className="mx-auto"
      />
      <CustomImage
        src="/assets/Persona2.png"
        alt="Imagem com borda animada sobre a segunda persona do estudo de descoberta"
        className="mx-auto"
      />

      <div className="flex items-center flex-col justify-center p-0 md:px-24 md:pb-0 pt-8">
        <h2 className="text-2xl font-semibold mb-8">- Ideação -</h2>
        <p className="md:max-w-[50vw] max-w-[90vw] text-center mb-2">
          Com as personas criadas, comecei a traçar algumas hipóteses em relação
          ao comportamento dos usuários.
        </p>

        <ul className="md:max-w-[65vw] max-w-[90vw] text-primary/70">
          <li className="flex items-center">
            <BiSolidRightArrow className="mr-2 text-xl text-accent" />
            Muitos usuários poderiam ter dificuldade em adotar a tecnologia para
            realizar pedidos em uma padaria;
          </li>
          <li className="flex items-center">
            <BiSolidRightArrow className="mr-2 text-xl text-accent" />
            Esperava que poucos usuários soubessem como verificar o rastreio de
            um pedido;
          </li>
          <li className="flex items-center">
            <BiSolidRightArrow className="mr-2 text-xl text-accent" />
            Achava que a maioria teria facilidade em ajustar a quantidade de
            itens no pedido.
          </li>
        </ul>

        <p className="md:max-w-[50vw] max-w-[90vw] text-center mt-4">
          Além disso, fez-se necessário criar um{" "}
          <strong>fluxo de usuário</strong> para entender quais telas eram
          necessárias na aplicação:
        </p>
        <CustomImage
          src="/assets/UserFlow.jpg"
          alt="Fluxo de Usuário"
          className="mx-auto"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-20">- Wireframes -</h2>
      <p className="md:max-w-[50vw] max-w-[90vw] text-center mt-4">
        Para evitar grandes reaprendizados e consequentemente uma frustração dos
        usuários, as wireframes foram projetadas para serem simples e
        familiares.
      </p>
      <CustomImage
        src="/assets/wireframes.jpeg"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="300px"
      />

      <h2 className="text-2xl font-semibold mt-20">- Protótipos lo-fi -</h2>
      <CustomImage
        src="/assets/wireframes-digitais.png"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="400px"
      />

      <a
        target="_blank"
        href="https://www.figma.com/proto/6lvyqlduaXmGu1iaAiPoEv/bikcraft-wireframe?node-id=328-306&node-type=frame&t=2GVOeBKycmacxDXV-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=328%3A306&show-proto-sidebar=1"
        className=" hover:text-accent-hover transition-colors"
      >
        Ver Protótipo no Figma
      </a>

      <h2 className="text-2xl font-semibold mt-20">
        - Protótipos de alta fidelidade -
      </h2>
      <CustomImage
        src="/assets/highFidelity.jpg"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="400px"
      />

      <a
        target="_blank"
        href="https://www.figma.com/proto/6lvyqlduaXmGu1iaAiPoEv/bikcraft-wireframe?node-id=412-80&node-type=frame&t=1QRbIJ14iSe9hIgm-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=412%3A80&show-proto-sidebar=1"
        className=" hover:text-accent-hover transition-colors"
      >
        Ver Protótipo no Figma
      </a>
      <p className="md:max-w-[50vw] max-w-[90vw] text-center mt-4">
        Com as telas projetadas e validadas, foi o momento de evoluir o projeto
        para alta fidelidade, para isso foi criado um guia de estilos que
        posteriormente seria utilizado como base para a criação do primeiro
        design system da Bom Apetite.
      </p>

      <div className="border border-primary/10 my-16 p-8 rounded-md">
        <h2 className="text-2xl font-semibold">
          <strong>Meus aprendizados</strong> até o momento atual do projeto
        </h2>
        <p className="md:max-w-[50vw] max-w-[90vw] mt-4">
          Esse projeto foi desafiador, especialmente por ser o único UX e UI
          designer envolvido. A responsabilidade foi grande, já que precisei
          coordenar todas as etapas, desde o planejamento até a execução dos
          testes e entrevistas. No entanto, essa experiência me proporcionou um
          aprendizado imenso, me preparando para enfrentar situações similares
          no futuro.
        </p>
        <p className="md:max-w-[50vw] max-w-[90vw] mt-4">
          Esse projeto foi desafiador, especialmente por ser o único UX e UI
          designer envolvido. A responsabilidade foi grande, já que precisei
          coordenar todas as etapas, desde o planejamento até a execução dos
          testes e entrevistas. No entanto, essa experiência me proporcionou um
          aprendizado imenso, me preparando para enfrentar situações similares
          no futuro.
        </p>
        <p className="md:max-w-[50vw] max-w-[90vw] mt-4">
          Esse projeto foi desafiador, especialmente por ser o único UX e UI
          designer envolvido. A responsabilidade foi grande, já que precisei
          coordenar todas as etapas, desde o planejamento até a execução dos
          testes e entrevistas. No entanto, essa experiência me proporcionou um
          aprendizado imenso, me preparando para enfrentar situações similares
          no futuro.
        </p>
      </div>
    </section>
  );
};

export default page;
