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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:h-52">
          {/* Coluna Texto */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm md:text-base">{text}</p>
          </div>

          {/* Coluna Imagem com botão overlay */}
          <div className="relative h-full w-full flex items-center justify-center">
            <CustomImage
              src={img}
              alt={alt}
              className="max-h-[180px] object-contain"
            />

            {/* Botão circular plus no canto superior direito da imagem */}
            <div className="absolute top-8 right-4 z-20">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setIsOpen(true)}
                    className="w-[70px] h-[70px] rounded-full bg-primary/10 flex justify-center items-center group cursor-pointer"
                  >
                    <span className="text-3xl font-bold group-hover:text-accent">
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
