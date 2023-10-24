import Carousel from "@/components/Carousel";
import ContestProduct from "@/components/ContestProduct";
import ProductCarousel from "@/components/ProductCarousel";
import H3 from "@/components/Typography/H3";
import Image from "next/image";

export default async function TestComponent() {
    return (
        <div className="items-center justify-center flex">
            <Carousel className="max-w-7xl mt-12">
                <div>
                    <Image src={'/images/carrossel.png'} alt="A draw of three happy peaple" width={1280} height={400} />
                    <div className="absolute right-0 z-10 top-20 w-96 mt-[-16px] flex flex-col">
                        <H3>Lorem Ipsum si dolor Et amet!</H3>
                        <p className="text-base w-[327px] mt-4">
                            Envie seu design para concorrer a votação.
                            O design ganhador será transformado em
                            produto e você receberá parte das vendas.
                            Esse texto é temporário e será trocado. No
                            Momento não tenho ideia do que por aqui,
                            mas precisamos de mais espaço. 
                        </p>
                        <button className="bg-[#1c3380] text-white p-3 rounded-lg w-48 self-end mt-4 mr-14">Veja como participar</button>
                    </div>
                </div>
            </Carousel>
            <ProductCarousel ProductComponent={ContestProduct}></ProductCarousel>
        </div>
    )
}