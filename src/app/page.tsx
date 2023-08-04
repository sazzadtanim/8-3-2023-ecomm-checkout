"use client";

import Headline from "@/components/Headline";
import Input, { InputProps } from "@/components/Input";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import anc from "@png/anc.png";
import camera from "@png/camera.jpg";
import speaker from "@png/speaker.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const boxShadow = { boxShadow: "1px 1px 10px 0 rgba(0,0,0,0.10)" };

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

const inputList: InputProps[] = [
  { label: "name", placeholder: "Bryan Cranston" },
  { label: "mobile number", placeholder: "+1 424-236-3574", type:'number' },
  { label: "email", placeholder: "example@email.com" , type:'email'},
  { label: "city", placeholder: "Hawthorne", },
  { label: "state", placeholder: "California" },
  { label: "ZIP", placeholder: "90250", type:'number' },
  { label: "address", placeholder: "4796 libby street", type: "text" },
];

export default function Home() {
  return (
    <main className="flex container mx-auto justify-between gap-10 mb-20">
      <LeftSection />
      <RightSection />
    </main>
  );
}

function LeftSection() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const buttonStyles = {
    left: "justify-start ",
    right: "justify-end ",
  };

  const roundbuttonStyles = {
    left: " bg-gray-300",
    right: " bg-gray-600",
  };

  return (
    <div className="flex flex-col gap-10 flex-1 ">
      <div className="delivery_information" title="Delivery Information">
        <Headline title={"Delivery information"} />
        <motion.div
          className="form bg-white p-10 grid grid-cols-2 gap-5"
          whileHover={boxShadow}
        >
          {inputList.map((input, index) => (
            <Input key={index} {...input} />
          ))}
        </motion.div>
      </div>

      <div className="schedule_delivery" title="Schedule Delivery">
        <>
          <div className="font-gerbera capitalize mb-6 flex gap-10">
            schedule delivery
            <div
              className={`bg-gray-400 flex h-6 w-9 rounded-2xl items-center ${
                isOn ? buttonStyles["right"] : buttonStyles["left"]
              } `}
              data-isOn={isOn}
              onClick={toggleSwitch}
            >
              <motion.div
                className={`rounded-full w-4 h-4 mx-1 ${
                  isOn ? roundbuttonStyles["right"] : roundbuttonStyles["left"]
                }`}
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            </div>
          </div>
        </>
        {isOn && (
          <motion.div
            className="form bg-white p-10 flex flex-col gap-5 select-none"
            initial={{ y: 20, opacity: 0 }}
            exit={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={boxShadow}
            transition={{ duration: 0.3 }}
          >
            <Input
              label="Date"
              placeholder="17 Apr, 23  -  19 Apr, 23"
              type="date"
            />
            <Input label="note" placeholder="Type your note" type={"text"} />
          </motion.div>
        )}
      </div>

      <div className="payment_method mb-10" title="Payment Method">
        <Headline title="payment method" />
        <motion.div className="form bg-white p-10 flex" whileHover={boxShadow}>
          <Input
            label="online payment"
            type="checkbox"
            placeholder="online payment"
          />
          <Input label="cash on delivery" type="checkbox" />
          <Input label="POS on delivery" type="checkbox" />
        </motion.div>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div
      className="right_section max-w-2xl flex-1 grid mb-10"
      title="Order Summary"
    >
      <div className="absolute">
        {" "}
        <Headline title="order summary" />
      </div>
      <motion.div
        className="product_summary_cart p-10 bg-white mt-12 flex flex-col justify-between"
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
