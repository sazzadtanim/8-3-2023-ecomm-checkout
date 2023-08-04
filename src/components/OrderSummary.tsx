import { boxShadow } from "@/app/offlineData";
import anc from "@png/anc.png";
import camera from "@png/camera.jpg";
import speaker from "@png/speaker.jpg";
import { motion } from "framer-motion";
import Headline from "./Headline";
import ProductCard, { ProductCardProps } from "./ProductCard";

const productCards: ProductCardProps[] = [
  {
    model: "TOASB-2S",
    title: "Portable Stereo Speaker",
    price: "230.49",
    image: speaker,
  },
  {
    model: "JC00-SB",
    title: "i-Type Instant Camera",
    price: "630.20",
    image: camera,
  },
  {
    model: "JH151-SH",
    title: "Positive Vibration ANC ",
    price: "330.00",
    image: anc,
  },
];
export default function OrderSummary() {
  return (
    <div
      className="right_section max-w-2xl flex-1 grid sm:mb-10"
      title="Order Summary"
    >
      <div className="absolute">
        {" "}
        <Headline title="order summary" />
      </div>
      <motion.div
        className="product_summary_cart p-4 sm:p-10 bg-white sm:mt-12 flex flex-col justify-between"
        whileHover={boxShadow}
      >
        <div className="flex flex-col gap-10 mb-10">
          {productCards.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="calculation grid">
          <div className="border-y ring-gray-200 py-5 flex flex-col gap-5">
            <div className="flex capitalize justify-between">
              <span className="font-light text-gray-500">subtotal</span>
              <span className="font-sans font-semibold">$1250.32</span>
            </div>
            <div className="flex capitalize justify-between">
              <span className="font-light text-gray-500">shipping</span>
              <span className="font-sans font-semibold"> -- </span>
            </div>
          </div>

          <div className="flex capitalize justify-between py-5">
            <span className="font-light text-gray-500">total(usd)</span>
            <span className="font-sans font-semibold">$7250</span>
          </div>

          <button className="bg-[#22331D] text-white capitalize py-2 w-full mx-auto hover:bg-slate-950">
            confirm order
          </button>
        </div>
      </motion.div>
    </div>
  );
}
