import Marquee from "react-fast-marquee";
import { AppConfig } from "config/AppConfig";
import Image from "next/image";

export default function Certificates() {
  const { certificates } = AppConfig;
  const shuffledImages = [...certificates.images].sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="bg-white" id="certificates">
        <div className="mx-auto flex justify-center items-center flex-col max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
            {certificates.title}
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-700">
            {certificates.description}
          </p>
          <Marquee
            gradient={true}
            speed={200}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
            gradientColor="[255, 255, 255]"
            gradientWidth={100}
            className="w-full"
          >
            {shuffledImages.map((image, index) => (
              <div className="group mr-4 ml-4 mt-10" key={index}>
                <Image
                  src={image}
                  alt={certificates.alt}
                  width={150}
                  height={150}
                  className="w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75" 
                />
              </div>
            ))}
            </Marquee>  
        </div>
      </div>
    </>
  );
}
