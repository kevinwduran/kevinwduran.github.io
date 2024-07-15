
import { FiDownload } from 'react-icons/fi'
import { Button } from './ui/button'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='pb-28 md:mb-0'>
      <div className="container mx-auto">
        <div className="items-center justify-between xl:pt-8 xl:pb-20">
          {/* text */}
          <div className="text-center">
            <p className="mx-auto text-5xl font-semibold md:text-7xl max-w-[800px] mb-9 mt-20">
              <span className="text-accent">Kevin Duran</span>, transformando ideias em interfaces excepcionais.
            </p>
            <span className="text-2xl">
              UI / UX Designer & Front-End
            </span>
            {/* botão mídias */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="flex xl:hidden mb-8 xl:mb-0 mt">
                <Socials
                  containerSyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-md flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero