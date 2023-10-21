import HomePageProduct from "@/components/HomePageProduct";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/Footer";

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