"use client";
import React, { useState } from "react";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { Product } from "../ProductCarousel";

interface ContestProductProps extends Product { }

export default function ContestProduct({
    productId,
    productName,
    productImage,
    productAuthor,
    productVoted,
}: ContestProductProps) {

    const [select, setSelected] = useState(productVoted);

    const handleClick = () => {
        setSelected(!select);
        console.log(productVoted);
    };

    return (
        <div className="h-[400px]">
            <Image
                className="shadow-md rounded-lg mb-3"
                src={productImage}
                alt="product image"
                width={267}
                height={259}
            />
            <div className="p-2">
                <div className="flex w-full justify-between max-w-[255px] mb-0">
                    <h3 className="text-base font-semibold">{productName}</h3>
                    <div className="flex">
                        <span onClick={handleClick}>
                            {select ? <FavoriteIcon sx={{ color: red[600] }} /> : <FavoriteBorderIcon sx={{ color: red[600] }} />}
                        </span>
                    </div>
                </div>

                <p className="text-xs mb-3">
                    design por: {productAuthor}
                </p>

            </div>
        </div>
    );
}