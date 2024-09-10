import Image from 'next/image';

const CustomImage = ({ src, alt, width = '', height = '', className = '', ...props }) => {
  return (
    <div
      className={`relative p-[1px] rounded-md bg-[length:200%_200%] bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500 animate-gradient ${className} my-4 w-72 md:w-[550px] lg:w-[700px] h-60 md:h-[400px] lg:h-[550px] `}
      style={{ width, height }}
      {...props}
    >
      <div className="relative rounded-md overflow-hidden bg-white h-full w-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"  // Ajusta a imagem para preencher o contêiner
          objectFit="cover" // Mantém a proporção e cobre o contêiner
          className="rounded-md w-80 md:w-[600px] lg:w-[800px]"
        />
      </div>
    </div>
  );
};

export default CustomImage;
