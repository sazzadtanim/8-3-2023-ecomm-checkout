import Headline from "@/components/Headline";
import Input, { InputProps } from "@/components/Input";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";

const productCards: ProductCardProps[] = [
  {
    model: "TOASB-2S",
    title: "portable stereo speaker",
    price: "230.49",
  },
  {
    model: "JC00-SB",
    title: "i-Type Instant Camera",
    price: "630.20",
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
          <Input label="Dates" placeholder="17 apr,23 - 19 Apr,23" />
          <Input label="note" placeholder="type your note" type={"text"} />
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
    <div className="right_section max-w-2xl flex-1 h-full">
      <Headline title="order summary" />
      <div className="product_summary_cart p-10 bg-white">
        <div className="flex flex-col gap-10 mb-10">
          {productCards.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="calculation">
          <div>
            <span>subtotal</span>
            <span>1250.32</span>
          </div>

          <div>
            <span>shipping</span>
            <span> -- </span>
          </div>

          <div>
            <span>total(usd)</span>
            <span>7250</span>
          </div>

          <button>confirm order</button>
        </div>
      </div>
    </div>
  );
}
