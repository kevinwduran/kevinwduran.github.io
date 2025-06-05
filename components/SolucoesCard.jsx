"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { useState } from "react";
import CustomImage from "./CustomImage";
import { BsPlusLg } from "react-icons/bs";

const SolucoesCard = ({ title, text, img, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border rounded-xl p-6 hover:shadow-sm transition">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Coluna Texto */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm md:text-base">{text}</p>
          </div>

          {/* Coluna Imagem com botão overlay - CONTAINER PRINCIPAL CORRIGIDO */}
          <div className="relative flex items-center justify-center h-48 md:h-40 w-full overflow-hidden rounded-lg bg-gray-50">
            {/* IMAGEM COM TAMANHO CONTROLADO */}
            <CustomImage
              src={img}
              alt={alt}
              className="h-full w-full object-contain"
            />

            {/* Botão circular plus no canto superior direito da imagem */}
            <div className="absolute top-2 right-2 z-20">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setIsOpen(true)}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex justify-center items-center group cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl font-bold group-hover:text-accent">
                      <BsPlusLg />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver imagem ampliada</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 cursor-pointer"
        >
          <CustomImage
            src={img}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default SolucoesCard;