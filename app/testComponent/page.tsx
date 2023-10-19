import HomePageProduct from "@/components/HomePageProduct";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";

export default async function TestComponent() {
    return (
        <div>
        <ProductCarousel 
            title="Mais vendidos" 
            ProductComponent={HomePageProduct} 
        />
        </div>
    )
}