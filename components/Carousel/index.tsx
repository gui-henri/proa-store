"use client"

import Slider from "react-slick"

type CarouselProps = {
    children: React.ReactNode
    className?: string
}

export default function Carousel({ children, className }: CarouselProps) {
    return (
        <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            className={className}
        >
            {children}
        </Slider>
    )
}