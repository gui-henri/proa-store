type H3Props = {
    children: React.ReactNode;
    light?: boolean;
}

export default function H1({ children, light = false }: H3Props) {
    return (
        <h3 className={`text-3xl font-bold text-black`}>
            {children}
        </h3>
    )
}