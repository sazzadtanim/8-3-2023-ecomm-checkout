import { motion } from "framer-motion";
import Headline from "./Headline";
import Input, { InputProps } from "./Input";

const inputList: InputProps[] = [
  { label: "name", placeholder: "Bryan Cranston" },
  { label: "mobile number", placeholder: "+1 424-236-3574", type: "number" },
  { label: "email", placeholder: "example@email.com", type: "email" },
  { label: "city", placeholder: "Hawthorne" },
  { label: "state", placeholder: "California" },
  { label: "ZIP", placeholder: "90250", type: "number" },
  { label: "address", placeholder: "4796 libby street", type: "text" },
];
const boxShadow = { boxShadow: "1px 1px 10px 0 rgba(0,0,0,0.10)" };

export default function DeliveryInformation() {
  return (
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
  );
}
