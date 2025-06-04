import Image from 'next/image';

const CustomImage = ({
  src,
  alt,
  width = '',
  className = '',
  objectFit = 'contain',
  ...props
}) => {
  return (
    <div
      className={`relative p-[1px] rounded-md bg-[length:200%_200%] bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500 animate-gradient ${className} my-4 w-72 md:w-[450px] lg:w-[480px]`}
      style={{ width }}
      {...props}
    >
      <div className="relative rounded-md overflow-hidden bg-white w-full">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={500}
          height={300}
          objectFit={objectFit}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CustomImage;
