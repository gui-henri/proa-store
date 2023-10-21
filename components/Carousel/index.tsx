"use client"

import Slider from "react-slick"

type CarouselProps = {
    children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
    return (
        <Slider
            arrows={true}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
        >
            {children}
        </Slider>
    )
}