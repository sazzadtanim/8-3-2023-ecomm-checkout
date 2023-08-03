import Headline from "@/components/Headline";
import Input, { InputProps } from "@/components/Input";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import anc from "@png/anc.png";
import camera from "@png/camera.jpg";
import speaker from "@png/speaker.jpg";

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
  { label: "mobile number", placeholder: "+1 424-236-3574" },
  { label: "email", placeholder: "tanimsazzad@gmail.com" },
  { label: "city", placeholder: "Hawthorne" },
  { label: "state", placeholder: "California" },
  { label: "ZIP", placeholder: "90250" },
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
  return (
    <div className="flex flex-col gap-10 flex-1 ">
      <div className="delivery_information">
        <Headline title={"Delivery information"} />
        <div className="form bg-white p-10 grid grid-cols-2 gap-5">
          {inputList.map((input, index) => (
            <Input key={index} {...input} />
          ))}
        </div>
      </div>

      <div className="schedule_delivery">
        <Headline title="schedule delivery" />
        <div className="form bg-white p-10 flex flex-col gap-5">
          <Input label="Dates" placeholder="17 Apr, 23  -  19 Apr, 23" />
          <Input label="note" placeholder="Type your note" type={"text"} />
        </div>
      </div>

      <div className="payment_method">
        <Headline title="payment method" />
        <div className="form bg-white p-10 flex">
          <Input
            label="online payment"
            type="radio"
            placeholder="online payment"
          />
          <Input label="cash on delivery" type="radio" />
          <Input label="POS on delivery" type="radio" />
        </div>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="right_section max-w-2xl flex-1 grid">
      <div className="absolute">
        {" "}
        <Headline title="order summary" />
      </div>
      <div className="product_summary_cart p-10 bg-white mt-12 flex flex-col justify-between">
        <div className="flex flex-col gap-10 mb-10">
          {productCards.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="calculation grid">
          <div className="border-y ring-gray-200 py-5 flex flex-col gap-5">
            <div className="flex capitalize justify-between">
              <span className="font-light text-gray-500">subtotal</span>
              <span>$1250.32</span>
            </div>
            <div className="flex capitalize justify-between">
              <span className="font-light text-gray-500">shipping</span>
              <span> -- </span>
            </div>
          </div>

          <div className="flex capitalize justify-between py-5">
            <span className="font-light text-gray-500">total(usd)</span>
            <span>$S7250</span>
          </div>

          <button className="bg-[#22331D] text-white capitalize py-2 w-full mx-auto">
            confirm order
          </button>
        </div>
      </div>
    </div>
  );
}
