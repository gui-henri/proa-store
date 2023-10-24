export type Product = {
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
    avaliationQuantity: number;
    productDescription: string;
    avaliation: number;
    author?: string;
    numVotes?: number;
}

type ProductCarouselProps = {
    title?: string;
    className?: string;
    mode?: 'row' | 'column';
    ProductComponent: React.ComponentType<Product>;
}

export default function ProductCarousel({ title, ProductComponent, className, mode }: ProductCarouselProps) {

    // TODO: fetch the products from database

    const products = [
        {
            productName: "Caneca PROA",
            productDescription: "Caneca de porcelana com logo do PROA",
            productPrice: 15.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 1,
            productImage: '/images/caneca.png',
            author: 'João Pedro',
            numVotes: 10

        } as Product,
        {
            productName: "Bottom PROA",
            productDescription: "Para decorar seu bolso ou camisa",
            productPrice: 3.00,
            avaliation: 4.5,
            avaliationQuantity: 194,
            productId: 2,
            productImage: '/images/bottom.png',
            author: 'José Maria',
            numVotes: 1029

        } as Product,
        {
            productName: "Camisa PROA",
            productDescription: "Vista o PROA",
            productPrice: 25.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 3,
            productImage: '/images/camisa.png',
            author: 'Maria José',
            numVotes: 99

        } as Product,
        {
            productName: "Agenda PROA",
            productDescription: "Para registrar seus compromissos",
            productPrice: 20.00,
            avaliation: 4.5,
            avaliationQuantity: 157,
            productId: 4,
            productImage: '/images/agenda.png',
            author: 'Enzo Valentino',
            numVotes: 0
        } as Product
    ]

    products.sort((a: Product, b: Product) => b.numVotes && a.numVotes ? b.numVotes - a.numVotes : 0)

    const modeStyle = mode === 'column' ? 'flex-col' : 'flex-row'

    return (
        <div className={className}>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className={`flex ${modeStyle} w-full justify-between p-12`}>
                {
                    products.map((product) => (
                        <ProductComponent key={product.productId} {...product} />
                    ))
                }
            </div>
        </div>
    )
}