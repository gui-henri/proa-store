import Image from "next/image"
import { Product } from "../ProductCarousel"
import { Rating } from "@smastrom/react-rating"

import '@smastrom/react-rating/style.css'

interface HomePageProductProps extends Product{};

export default function HomePageProduct({ 
    productId, 
    productDescription, 
    productImage, 
    productName, 
    productPrice, 
    avaliation, 
    avaliationQuantity 
}: HomePageProductProps) {

    const CustomStar = (
        <path d="M6.03426 0.563972C6.20515 0.153559 6.78655 0.153558 6.95744 0.563971L8.28559 3.75382C8.35764 3.92686 8.52042 4.04507 8.70726 4.06004L12.1537 4.33604C12.5972 4.37156 12.7769 4.92509 12.4389 5.21435L9.81383 7.46056C9.67127 7.58255 9.609 7.77409 9.65258 7.95659L10.4547 11.3157C10.558 11.7482 10.0876 12.0903 9.70796 11.8587L6.75628 10.0577C6.59637 9.96014 6.39534 9.96014 6.23543 10.0577L3.28374 11.8587C2.90413 12.0903 2.4337 11.7482 2.53699 11.3157L3.33912 7.95659C3.3827 7.77409 3.32043 7.58255 3.17787 7.46056L0.552834 5.21434C0.214801 4.92509 0.394521 4.37156 0.837998 4.33604L4.28444 4.06004C4.47128 4.04507 4.63406 3.92686 4.70611 3.75382L6.03426 0.563972Z"/>  
    )

    const customStyles = {
        itemShapes: CustomStar,
        itemStrokeWidth: 1,
        activeFillColor: 'black',
        activeStrokeColor: 'black',
        inactiveStrokeColor: 'black'
    }
    
    return (
        <div className="h-[400px]">
            <Image className="shadow-md rounded-lg mb-3" src={productImage} alt="product image" width={267} height={259} />
            <div className="p-2">
                <div className="flex w-full justify-between max-w-[255px] mb-3">
                    <h3 className="text-base font-semibold">{productName}</h3>
                    <div className="flex">
                        <span className="text-xs">R$</span>
                        <h3 className="text-base font-semibold">{productPrice.toFixed(2)}</h3>
                    </div>
                </div>
                <p className="text-xs mb-3">{productDescription}</p>
                <div className="flex mb-4">
                    <Rating style={{maxWidth: 120}} value={avaliation} readOnly itemStyles={customStyles} />
                    <span className="text-[10px] font-semibold">({avaliationQuantity} avaliações)</span>        
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <button className="bg-[#1c3380] text-white p-4 rounded-lg">Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}