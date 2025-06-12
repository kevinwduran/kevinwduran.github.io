"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Projetos from "../app/projetos/page";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "excepcionais";
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      setText(currentText => {
        if (!isDeleting && currentText === fullText) {
          setSpeed(1000);
          setIsDeleting(true);
          return currentText;
        } else if (isDeleting && currentText === "") {
          setSpeed(500);
          setIsDeleting(false);
          return currentText;
        }
        
        setSpeed(150);
        return isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
      });
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, fullText]);

  return (
    <section className="pb-28 md:mb-0">
      <div className="container mx-auto">
        <div className="items-center justify-between xl:pt-8 xl:pb-20">
          {/* text */}
          <div className="text-center">
            {/* Container com altura fixa baseada na linha completa */}
            <div className="min-h-[180px] mt-24 md:min-h-[220px] flex items-end justify-center">
              <h1 className="mx-auto text-5xl font-semibold md:text-7xl max-w-[800px]">
                <span className="text-accent">Kevin Duran</span>, transformando
                ideias em interfaces <br></br>{" "}
                <span className="inline-block min-w-[180px] md:min-w-[220px] text-left">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {text}
                  </motion.span>
                  <motion.span
                    className="inline-block w-1 h-12 bg-accent ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                  />
                </span>
              </h1>
            </div>

            {/* Elementos estáticos abaixo */}
            <div className="mt-12">
              <p className="text-2xl mb-6">UI / UX Designer | Product Designer</p>
              
              <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
                <a href="/assets/Currículo.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Baixar Currículo</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="flex xl:hidden">
                  <Socials
                    containerSyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-md flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;