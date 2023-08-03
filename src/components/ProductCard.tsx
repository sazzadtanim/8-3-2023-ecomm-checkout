import Image, { StaticImageData } from "next/image";

export interface ProductCardProps {
  image?: StaticImageData;
  title: string;
  model: string;
  price: string;
}

function ProductCard(props: ProductCardProps) {
  const { model, title, price, image } = props;

  return (
    <div title={title} className="flex justify-between items-center">
      <div className="flex">
        <Image alt="" src={image ?? ""} />
        <div className="grid leading-6 font-sans">
          <span className="capitalize font-medium">
            {title}
          </span>
          <span className="font-light text-gray-500 ">{model}</span>
          <span className="font-medium">${price}</span>
        </div>
      </div>

      <div className="flex ring-1 gap-4 px-4 py-2 justify-center items-center ring-gray-200">
        <span className="text-2xl">-</span>
        <span>01</span>
        <span className="text-2xl">+</span>
      </div>
    </div>
  );
}

export default ProductCard;
