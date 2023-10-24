import Carousel from "@/components/Carousel";
import HomePageProduct from "@/components/HomePageProduct";
import ContestProduct from "@/components/ContestProduct";
import ProductCarousel from "@/components/ProductCarousel";
import H3 from "@/components/Typography/H3";
import Image from "next/image";

export default function productPage() {

  return (
    <div className="flex flex-col">
      <div className="items-center justify-center flex">
        <Carousel className="max-w-6xl mt-10">
          <div className="relative">
            <div className="absolute left-5 z-10 top-20 w-96 mt-[-16px] flex flex-col justify-between text-center space-y-4">
              <p className="text-3xl text-white mt-4">
                Vote no nosso próximo produto! Venha fazer parte da nossa história.
              </p>
              <button className="bg-[#00B9F2] text-white p-3 rounded-lg w-90 self-center">
                Concurso até 31/11/2023
              </button>
              <p className="text-3xl text-white w-[327px] mt-4">
                ou envie seu design
              </p>
            </div>
            <Image
              src="/images/ProaBanner.png"
              alt="A draw of three happy people"
              width={1280}
              height={400} // Adjust the height value as needed
              className="w-[1280px] h-[400px]"
            />
          </div>
        </Carousel>
      </div>
      <div className="w-[1280px] self-center mt-16">
        <ProductCarousel title="Design novos" ProductComponent={ContestProduct}></ProductCarousel>
      </div>
      <div className="w-[1280px] self-center">
        <ProductCarousel title="Outros designs para você votar" ProductComponent={ContestProduct}></ProductCarousel>
        <ProductCarousel ProductComponent={ContestProduct}></ProductCarousel>
      </div>

    </div>
  )
}
