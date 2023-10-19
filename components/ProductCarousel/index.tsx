export type Product = {
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
    avaliationQuantity: number;
    productDescription: string;
    avaliation: number;
}

type ProductCarouselProps = {
    title?: string;
    ProductComponent: React.ComponentType<Product>;
}

export default function ProductCarousel({ title, ProductComponent }: ProductCarouselProps) {

    // TODO: fetch the products from database

    const products = [
        {
            productName: "Caneca PROA",
            productDescription: "Caneca de porcelana com logo do PROA",
            productPrice: 15.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 1,
            productImage: '/images/caneca.png'

        } as Product,
        {
            productName: "Bottom PROA",
            productDescription: "Para decorar seu bolso ou camisa",
            productPrice: 3.00,
            avaliation: 4.5,
            avaliationQuantity: 194,
            productId: 2,
            productImage: '/images/bottom.png'

        } as Product,
        {
            productName: "Camisa PROA",
            productDescription: "Vista o PROA",
            productPrice: 25.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 3,
            productImage: '/images/camisa.png'

        } as Product,
        {
            productName: "Agenda PROA",
            productDescription: "Para registrar seus compromissos",
            productPrice: 20.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 4,
            productImage: '/images/agenda.png'
        } as Product
    ]

    return (
        <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className="flex w-full justify-between p-12">
                {
                    products.map((product) => (
                        <ProductComponent key={product.productId} {...product} />
                    ))
                }
            </div>
        </div>
    )
}