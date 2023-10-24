import Carousel from "@/components/Carousel";
import HomePageProduct from "@/components/HomePageProduct";
import ProductCarousel from "@/components/ProductCarousel";
import H3 from "@/components/Typography/H3";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col">
      <div className="items-center justify-center flex">
        <Carousel className="max-w-7xl mt-12">
          <div>
            <Image src={'/images/carrossel.png'} alt="A draw of three happy peaple" width={1280} height={400} />
            <div className="absolute right-0 z-10 top-20 w-96 mt-[-16px] flex flex-col">
                <H3>Envie seus designs, ganhe visibilidade e uma renda extra!</H3>
                <p className="text-base w-[327px] mt-4">
                É a sua chance de brilhar e inspirar o mundo com sua criatividade. Vamos mostrar ao mundo o poder do talento PROA - participe agora e faça parte dessa jornada incrível! Envie seu design e deixe sua marca na Lojinha PROA hoje mesmo! 
                </p>
                <button className="bg-[#1c3380] text-white p-3 rounded-lg w-48 self-end mt-4 mr-14">Veja como participar</button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="w-[1280px] self-center mt-16">
        <ProductCarousel title="Mais vendidos" ProductComponent={HomePageProduct} />
      </div>
      <div className="w-[1280px] self-center mt-16 mb-16">
        <ProductCarousel title="Destaques dos alunos" ProductComponent={HomePageProduct} />
      </div>
      <div className="text-center w-full mt-32">
        <H3>Não achou sua próxima caneca ainda?</H3>
        <div className="w-full flex items-center justify-center mt-8 mb-32">
          <button className="bg-[#1c3380] text-white p-4 rounded-lg">Veja mais</button>
        </div>
      </div>
    </div>
  )
}
