import { Product } from "../ProductCarousel";
import Image from "next/image";

interface HomePageProductProps extends Product {};

export default function VotingProduct({
    avaliation,
    avaliationQuantity,
    productDescription,
    productId,
    productImage,
    productName,
    productPrice,
    author,
    numVotes
}: HomePageProductProps) {
    return (
        <div className="flex gap-5 w-[860px] h-[188px] bg-yellow-500 bg-opacity-40 mb-8 rounded-2xl p-3">
            <Image src={productImage} alt={productDescription} width={168} height={168} />
            <div className="w-full flex flex-col justify-evenly">
                <h4 className="text-2xl font-bold">{productName}</h4>
                <p className="text-gray-700">{productDescription}</p>
                <p className="font-bold">Autor(a): {author}</p>
                <div className="w-full flex justify-between">
                    <p className="font-bold">N° de votos: {numVotes}</p>
                    <button className="border-2 border-red-500 text-red-600 p-1 rounded-md">Deletar produto</button>
                </div>
            </div>
        </div>
    )
}