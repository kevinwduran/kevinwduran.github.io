const page = () => {
  return (
    <section className="p-10">
      <div className="h-60 flex items-center flex-col justify-center">
        <h1 className="text-4xl font-semibold">Padaria Bom Apetite</h1>
        <p className="text-center">Projeto UX Design</p>
      </div>

      <div className="flex">
        <div className="flex gap-4">
          <p className="text-right w-[50vw]">Função</p>
          <p className="font-semibold w-[50vw]">UX/UI Designer</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-4">
          <p className="text-right w-[50vw]">Duração</p>
          <p className="font-semibold w-[50vw]">2 meses (Ago-Out 2024)</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-4">
          <p className="text-right w-[50vw]">Ferramentas</p>
          <ul className="font-semibold w-[50vw]">
            <li>Caneta e Papel</li>
            <li>Figma</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center p-24">
        <h2 className="text-2xl font-semibold mb-8">- Sobre a Bom Apetite -</h2>
        <p className="max-w-[50vw]">
          A Bom Apetite é uma padaria moderna focada em oferecer produtos
          frescos e de alta qualidade. Com um atendimento rápido e
          personalizado, busca atender as necessidades dos clientes que
          valorizam praticidade e sabor, oferecendo uma experiência ágil através
          de seu novo aplicativo de vendas móveis, facilitando o pedido e
          retirada de produtos de maneira eficiente.
        </p>
      </div>
    </section>
  );
};

export default page;
