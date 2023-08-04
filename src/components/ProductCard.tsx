"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export interface ProductCardProps {
  image?: StaticImageData;
  title: string;
  model: string;
  price: string;
}

function ProductCard(props: ProductCardProps) {
  const { model, title, price, image } = props;
  const [counter, setCounter] = useState(1);
  return (
    <div title={title} className="flex justify-between items-center">
      <div className="flex gap-5 items-center justify-center">
        <Image alt="" src={image ?? ""} className="w-16 h-16 object-contain" />
        <div className="grid leading-6 font-sans">
          <span className="font-semibold text-gray-800">{title}</span>
          <span className=" text-gray-400 text-sm">{model}</span>
          <span className="font-sans font-semibold">${price}</span>
        </div>
      </div>

      <div className="flex ring-1 gap-4 px-4 py-2 justify-center items-center ring-gray-200">
        <button className="text-2xl" onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span className="font-sans font-medium">
          {counter < 10 && counter > 0 ? `0${counter}` : counter}
        </span>
        <button className="text-2xl" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
