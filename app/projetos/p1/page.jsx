import { FiDownload } from "react-icons/fi";
import { Button } from "../../../components/ui/button";
import CustomImage from "../../../components/CustomImage";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuAlertTriangle } from "react-icons/lu";

const page = () => {
  const titleClass = "text-2xl font-semibold mb-8";
  const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
  const listItemClass =
    "text-sm text-accent border border-accent py-1 px-3 rounded-full";
  const containerClass =
    "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

  return (
    <section className="flex items-center flex-col justify-center relative">
      <div className="mt-8 xl:m-0 relative min-w-[100%] h-[20%] bg-[url('/assets/Intersect.png')] bg-cover bg-center flex items-center flex-col justify-center">
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

        <div className="flex items-center gap-2 text-yellow-500 absolute right-10 bottom-10">
          <LuAlertTriangle />
          <p>O projeto está em andamento... 90%</p>
        </div>
      </div>

      <ul className="gap-2 flex flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        <li className={listItemClass}>Entrevistas</li>
        <li className={listItemClass}>
          Pesquisas Quantitativas e Qualitativas
        </li>
        <li className={listItemClass}>Objetivos e Hipóteses</li>
        <li className={listItemClass}>Personas</li>
        <li className={listItemClass}>User Flows</li>
        <li className={listItemClass}>Wireframes</li>
        <li className={listItemClass}>Protótipos Lo-Fi</li>
        <li className={listItemClass}>Testes de Usabilidade</li>
        <li className={listItemClass}>Formulário SUS</li>
        <li className={listItemClass}>Feedback e Iteração</li>
        <li className={listItemClass}>Design System</li>
      </ul>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-4">
        <a href="/assets/ProjetoBomApetite.pptx" download>
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

      <div className="max-w-[90%] h-[15%] flex items-center justify-center p-5 bg-black mt-8">
        <iframe
          width="90%"
          height="90%"
          src="https://embed.figma.com/proto/6lvyqlduaXmGu1iaAiPoEv/bikcraft-wireframe?node-id=412-80&node-type=frame&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=412%3A80&show-proto-sidebar=1&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>

      <div className={containerClass}>
        <h2 className={titleClass}>- Sobre a Bom Apetite -</h2>
        <p className={paragraphClass}>
          A Bom Apetite é uma padaria moderna focada em oferecer produtos
          frescos e de alta qualidade. Com um atendimento rápido e
          personalizado, busca atender as necessidades dos clientes que
          valorizam praticidade e sabor, oferecendo uma experiência ágil através
          de seu novo aplicativo de vendas móveis, facilitando o pedido e
          retirada de produtos de maneira eficiente.
        </p>
      </div>

      <div className={containerClass}>
        <h2 className={titleClass}>- Desafio -</h2>
        <p className={paragraphClass}>
          Como podemos garantir produtos de qualidade, eficiência e facilidade
          nos pedidos de nossos clientes através de um novo aplicativo?
        </p>
        <p className={paragraphClass + " mt-2"}>
          A padaria Bom Apetite, com o novo aplicativo, busca rapidez em seu dia
          a dia, satisfazendo seus clientes, sobretudo aqueles que possuem pouco
          tempo. Atualmente, pedidos são realizados apenas de forma presencial.
        </p>
      </div>

      <div className={containerClass}>
        <h2 className={titleClass}>- Solução -</h2>
        <p className={paragraphClass}>
          Criar um protótipo de alta fidelidade a fim de atender o desafio
          proposto, garantindo um aplicativo com clientes satisfeitos.
        </p>
      </div>

      <CustomImage
        src="/assets/presentation3sc.jpg"
        alt="Imagem com borda animada"
        className="mx-auto"
        objectFit="cover"
      />

      <div className={containerClass}>
        <h2 className={titleClass}>- Descoberta -</h2>
        <p className={paragraphClass}>
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

      <div className={containerClass}>
        <h2 className={titleClass}>- Ideação -</h2>
        <p className={paragraphClass + " mb-2"}>
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

        <p className={paragraphClass + " mt-4"}>
          Além disso, fez-se necessário criar um{" "}
          <strong>fluxo de usuário</strong> para entender quais telas eram
          necessárias na aplicação:
        </p>
        <CustomImage
          src="/assets/UserFlow.jpg"
          alt="Fluxo de Usuário"
          className="mx-auto"
          objectFit="cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-20">- Wireframes -</h2>
      <p className={paragraphClass + " mt-4"}>
        Para evitar grandes reaprendizados e consequentemente uma frustração dos
        usuários, as wireframes foram projetadas para serem simples e
        familiares.
      </p>
      <CustomImage
        src="/assets/wireframes.jpeg"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="300px"
        objectFit="cover"
      />

      <h2 className="text-2xl font-semibold mt-20">- Protótipos lo-fi -</h2>
      <p className={paragraphClass + " mt-4"}>
        O processo de passar os wireframes do papel para o digital foi bem
        interessante e desafiador, pois tentei aproximar o design à um protótipo
        de baixa fidelidade.
      </p>
      <CustomImage
        src="/assets/wireframes-digitais.png"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="400px"
        objectFit="cover"
      />
      <a
        target="_blank"
        href="https://www.figma.com/proto/6lvyqlduaXmGu1iaAiPoEv/bikcraft-wireframe?node-id=328-306&node-type=frame&t=2GVOeBKycmacxDXV-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=328%3A306&show-proto-sidebar=1"
        className=" hover:text-accent-hover transition-colors"
      >
        Ver Protótipo lo-fi no Figma
      </a>

      <h2 className="text-2xl font-semibold mt-20">- Protótipos hi-fi -</h2>
      <p className={paragraphClass + " mt-4"}>
        Minha parte favorita do projeto. Pensar em tipografias, ícones, cores,
        fluxo, scroll e criação de telas faltantes foi um grande ponto para
        amadurecimento do aplicativo da Bom Apetite.
      </p>
      <CustomImage
        src="/assets/highFidelity.jpg"
        alt="Imagem com borda animada"
        className="mx-auto"
        height="400px"
        objectFit="cover"
      />
      <a
        target="_blank"
        href="https://www.figma.com/proto/6lvyqlduaXmGu1iaAiPoEv/bikcraft-wireframe?node-id=412-80&node-type=frame&t=ZbOLv4Kpdq3l6dIm-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=412%3A80&show-proto-sidebar=1"
        className=" hover:text-accent-hover transition-colors"
      >
        Ver Protótipo hi-fi no Figma
      </a>

      <h2 className="text-2xl font-semibold mt-20">- Style Guide -</h2>
      <p className={paragraphClass + " mt-4"}>
        Com as telas projetadas e validadas, foi o momento de evoluir o projeto
        para alta fidelidade, para isso foi criado o primeiro guia de estilos da
        Bom Apetite que posteriormente seria utilizado como base para a criação
        de seu primeiro design system.
      </p>
      <CustomImage
        src="/assets/Design System.jpg"
        alt="Design System"
        className="mx-auto"
        height="450px"
      />

      <h2 className="text-2xl font-semibold mt-20">- Refinando a solução -</h2>
      <p className={paragraphClass + " mt-4"}>
        O projeto foi validado novamente com um novo teste de usabilidade, e
        neste teste alguns problemas foram relatados como a falta de
        acessibilidade na cor dos botões devido à sua falta de contraste. Me
        atentei e vi que a cor não seguia os padrões de um bom contraste. Então,
        houve uma troca de tom do laranja. Agora um pouco mais escuro:
      </p>
      <CustomImage
        src="/assets/changeOrange.jpg"
        alt="Mudança de cor e tom de laranja"
        className="mx-auto"
        width="200px"
        height="200px"
        objectFit="cover"
      />

      <div className="border border-primary/10 my-16 p-8 rounded-md mx-2">
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
          Durante o desenvolvimento deste projeto, pude aprimorar minhas
          habilidades em UX e UI, passando por todas as etapas do processo —
          desde entrevistas e testes até a prototipagem. Esse aprendizado só foi
          possível graças ao apoio dos meus familiares e amigos, como: Gian e
          Mateus, que participaram ativamente nas entrevistas, nos testes de
          usabilidade e no preenchimento do formulário SUS. Também gostaria de
          agradecer aos meus familiares, que me deram suporte durante todo o
          desenvolvimento e contribuíram com feedbacks valiosos para que o
          projeto fosse concluído com sucesso.
        </p>
      </div>
    </section>
  );
};

export default page;
