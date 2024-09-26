import Image from 'next/image';

const CustomImage = ({ src, alt, width = '', height = '', className = '', objectFit = '', ...props }) => {
  return (
    <div
      className={`relative p-[1px] rounded-md bg-[length:200%_200%] bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500 animate-gradient ${className} my-4 w-72 md:w-[450px] lg:w-[480px] h-72 md:h-[550px] lg:h-[500px] object-contain`}
      style={{ width, height }}
      {...props}
    >
      <div className="relative rounded-md overflow-hidden bg-white h-full w-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"  // Preenche o contêiner
          objectFit={objectFit ? objectFit : 'contain'} // Mantém a imagem inteira, mesmo que haja bordas internas
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CustomImage;
