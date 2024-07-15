"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Label } from "../../components/ui/label";

const data = [
  {
    title: "Nome",
    type: "text",
    description: "Nome",
    placeholder: "Insira seu nome",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    type: "text",
    description: "(41) 99970-5960",
    placeholder: "(41) 99999-8888",
  },
  {
    icon: <FaEnvelope />,
    type: "email",
    title: "E-mail",
    description: "kevinwillianduran@gmail.com",
    placeholder: "vamosconversar@com",
  },
];

const Contato = () => {
  return (
    <section

      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row xl:ml-8">
          {/* form */}
          <div className="xl:h-[54px] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 border border-[#e9e9e9] rounded-lg md:min-w-[40rem]">
              <h3 className="text-3xl text-accent font-semibold">
                Vamos conversar?
              </h3>
              {/* input */}
              <div className="grid grid-cols-1 gap-2">
                {data.map((dado, index) => (
                  <div key={index}>
                    <Label
                      className="uppercase tracking-wide text-primary/80"
                      htmlFor={dado.title}
                    >
                      {dado.title}
                    </Label>
                    <Input
                      id={dado.title}
                      type={dado.type}
                      placeholder={dado.placeholder}
                    />
                  </div>
                ))}
                <Textarea
                  className="h-[100px] mt-2 resize-none"
                  placeholder="Insira sua mensagem aqui."
                />
                {/* btn */}
                <div className="flex justify-end mt-2">
                  <Button size="md" variant="outline" className="max-w-40">
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {data.map((item, index) => {
                return (
                  <li key={index}>
                    {item.icon && (
                      <div className="flex items-center gap-2 xl:gap-6">
                        <div className="w-[32px] h-[32px] xl:w-[52px] xl:h-[52px] xl:text-[24px] bg-primary/10 text-accent rounded-full flex items-center justify-center">{item.icon}</div>
                        <div className="flex-1">
                          <p className="text-primary/60 uppercase font-medium tracking-wide text-sm">{item.title}</p>
                          <h3 className="text-lg">{item.description}</h3>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
