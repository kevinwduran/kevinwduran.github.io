import CustomImage from "../../../components/CustomImage";


const page = () => {
  const titleClass = "text-2xl font-semibold mb-8 text-center";
  const paragraphClass = "md:max-w-[50vw] max-w-[90vw] text-center";
  const listItemClass = "text-sm text-accent border border-accent py-1 px-3 rounded-full";
  const containerClass = "flex items-center flex-col justify-center p-0 md:p-24 md:pb-0 pt-16";

  return (
    <section className="flex items-center flex-col justify-center relative">
      <div className="mt-8 xl:m-0 relative min-w-[100%] h-[20%] bg-gray-300 bg-cover bg-center flex items-center flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 mt-8 h-40 flex items-center flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold text-center">Ferragens Negrão - Controle de Estoque</h1>
          <p className="text-center">Projeto UX/UI e Desenvolvimento Front-End</p>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Função</p>
            <p className="font-semibold w-[35vw]">UX/UI Designer e Front-End</p>
          </div>
        </div>

        <div className="flex z-10 ">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Duração</p>
            <p className="font-semibold w-[35vw]">5 meses (Mar-Jul 2024)</p>
          </div>
        </div>

        <div className="flex z-10">
          <div className="flex gap-4">
            <p className="text-right w-[35vw]">Ferramentas</p>
            <ul className="font-semibold w-[35vw]">
              <li>CSS, HTML e Bootstrap</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
      
      <ul className="gap-2 flex flex-wrap z-10 max-w-[90%] lg:max-w-[40vw] justify-center">
        <li className={listItemClass}>Pesquisa de Usuário</li>
        <li className={listItemClass}>Wireframes</li>
        <li className={listItemClass}>Testes de Usabilidade</li>
        <li className={listItemClass}>Design Responsivo</li>
        <li className={listItemClass}>Front-End com Bootstrap</li>
      </ul>

      <div className={containerClass}>
        <h2 className={titleClass}>- Problemática -</h2>
        <p className={paragraphClass}>
          A Ferragens Negrão, uma das maiores distribuidoras de materiais de construção e ferragens do Brasil, enfrentava desafios na gestão de peças de reposição. O uso de planilhas de Excel resultava em desorganização e imprecisão nos dados, impactando a eficiência operacional. O projeto foi desenvolvido para substituir esse sistema por uma solução automatizada e eficiente.
        </p>
      </div>
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Objetivo -</h2>
        <p className={paragraphClass}>
          Criar um sistema de controle de estoque ágil e seguro para a Ferragens Negrão, permitindo maior precisão dos dados e otimizando a operação de uma empresa que atende milhares de clientes e trabalha com um extenso catálogo de produtos.
        </p>
      </div>

      <div className={containerClass}>
        <h2 className={titleClass}>- Tela de Login -</h2>
        <p className={paragraphClass}>
          A tela de login foi projetada com foco em segurança, garantindo autenticação confiável para os usuários autorizados.
        </p>
      </div>

      <CustomImage src="/assets/ferragens-login.png" alt="Imagem do Portfólio" height="300px" className="mx-auto" objectFit="contain" />
      <CustomImage src="/assets/apresentação login mobile.jpg" alt="Imagem do Portfólio" className="mx-auto" objectFit="contain" />
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Tela Inicial -</h2>
        <p className={paragraphClass}>
          Interface intuitiva que permite acesso rápido às funcionalidades essenciais do sistema, como consulta de estoque e relatórios. A tela inicial também possui dashboards rápidos e importantes para que o usuário tenha feedback rápido e necessário logo que efetuar login no sistema.
        </p>
      </div>

      <CustomImage src="/assets/ferragens-home.png" alt="Imagem do Portfólio" height="300px" className="mx-auto" objectFit="contain" />
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Cadastro de Produtos e Aprovação -</h2>
        <p className={paragraphClass}>
          O módulo de cadastro de produtos possibilita inserir, editar e remover peças de reposição, garantindo informações atualizadas.
          A tela de aprovação também foi importante, nela somente usuários com permissões “Nível 2” (Aprovadores) e “Nível 3” (Administradores), poderão visualizar. As solicitações aparecem em formato de lista, possibilitando o usuário aprovar ou reprovar a solicitação de peças para remanufatura. 
        </p>
      </div>

      <CustomImage src="/assets/ferragens-cad.png" alt="Imagem do Portfólio" height="300px" className="mx-auto" objectFit="contain" />
      <CustomImage src="/assets/ferragens-aprov.png" alt="Imagem do Portfólio" height="300px" className="mx-auto" objectFit="contain" />
      
      <div className={containerClass}>
        <h2 className={titleClass}>- Resultados -</h2>
        <p className={paragraphClass}>
          A nova solução trouxe maior agilidade e confiabilidade ao gerenciamento de estoque, reduzindo erros e aumentando a eficiência operacional. Foi muito útil realizar pesquisas com usuário e testes de usabilidade para garantir um boa entrega, da forma que cliente espera.
        </p>
      </div>
    </section>
  );
};

export default page;
