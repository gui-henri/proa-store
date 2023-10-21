type H1Props = {
    children: React.ReactNode;
    light?: boolean;
}

export default function H1({ children, light = false }: H1Props) {
    return (
        <h1 className={`text-6xl font-bold text-black`}>
            {children}
        </h1>
    )
}