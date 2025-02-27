
import CustomImage from "../../../components/CustomImage";
import { BiSolidRightArrow } from "react-icons/bi";

const page = () => {
  const titleClass = "text-2xl font-semibold mb-8";
  const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
  const listItemClass = "text-sm text-accent border border-accent py-1 px-3 rounded-full";
  const containerClass = "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

  return (
    <section className="flex items-center flex-col justify-center relative">
      <div className="mt-8 xl:m-0 relative min-w-[100%] h-[20%] bg-gray-300 bg-cover bg-center flex items-center flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 h-60 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold">Portfólio Pessoal</h1>
          <p className="text-center">Projeto UX/UI e Desenvolvimento Web</p>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Tecnologias Utilizadas</p>
            <ul className="font-semibold w-[35vw]">
              <li>Adobe XD</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Shadcn UI</li>
            </ul>
          </div>
        </div>
      </div>
      
      <ul className="gap-2 flex flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        <li className={listItemClass}>Pesquisa de Usuário</li>
        <li className={listItemClass}>Wireframes</li>
        <li className={listItemClass}>Protótipos Interativos</li>
        <li className={listItemClass}>Design Responsivo</li>
        <li className={listItemClass}>Acessibilidade</li>
      </ul>

      <div className={containerClass}>
        <h2 className={titleClass}>- Sobre o Projeto -</h2>
        <p className={paragraphClass}>
          Meu portfólio pessoal foi criado para apresentar minha experiência e habilidades em UI/UX Design e Desenvolvimento Web.
          Ele foi projetado para oferecer uma navegação intuitiva e destacar meus principais projetos e competências.
        </p>
      </div>
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Objetivo -</h2>
        <p className={paragraphClass}>
          Criar um portfólio profissional, visualmente atrativo e funcional, que demonstre minhas habilidades e experiência no mercado.
        </p>
      </div>



      <div className={containerClass}>
        <h2 className={titleClass}>- Logo -</h2>
        <p className={paragraphClass}>
          Um dos primeiros passos ao projetar meu portfólio foi fazer o design de um logotipo para engatizar minha marca. Este processo foi difícil, pois tive que me habiturar ao Adobe Illustrator. 
        </p>
        <p className={paragraphClass}>
          Após alguns rabiscos e esboços no papel fui para o software e comecei a fazer a logo usando a técnica de grid. E este foi o resultado:
        </p>
      </div>

      <CustomImage src="/assets/logoAI.png" alt="Imagem do Portfólio" height="285px" className="mx-auto" objectFit="contain" />
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Resultados -</h2>
        <p className={paragraphClass}>
          O portfólio se tornou uma peça essencial para apresentar meus trabalhos e destacar minha experiência na área,
          proporcionando uma boa experiência ao usuário e facilitando a navegação.
        </p>
      </div>

      <CustomImage src="/assets/heroDesk.png" alt="Imagem do Portfólio" height="285px" className="mx-auto" objectFit="contain" />
      <CustomImage src="/assets/projetosDesk.png" alt="Imagem do Portfólio" height="285px" className="mx-auto" objectFit="contain" />
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Responsividade -</h2>
        <p className={paragraphClass}>
          A responsividade também foi um princípio crucial, para que todos que acessem o portfólio possam ter uma boa experiência.
        </p>
      </div>

      <CustomImage src="/assets/responsive.png" alt="Imagem do Portfólio" className="mx-auto" objectFit="cover" />
    </section>
  );
};

export default page;