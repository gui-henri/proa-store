type H2Props = {
    children: React.ReactNode;
    light?: boolean;
}

export default function H1({ children, light = false }: H2Props) {
    return (
        <h2 className={`text-5xl font-bold text-black`}>
            {children}
        </h2>
    )
}