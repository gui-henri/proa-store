import HomePageProduct from "@/components/HomePageProduct";
import ProductCarousel from "@/components/ProductCarousel";

export default async function TestComponent() {
    return (
        <ProductCarousel 
            title="Mais vendidos" 
            ProductComponent={HomePageProduct} 
        />
    )
}