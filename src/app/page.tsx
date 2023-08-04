"use client";

import DeliveryInformation from "@/components/DeliveryInformation";
import Headline from "@/components/Headline";
import Input from "@/components/Input";
import OrderSummary from "@/components/OrderSummary";
import ScheduleDelivery from "@/components/ScheduleDelivery";

import { motion } from "framer-motion";

export const boxShadow = { boxShadow: "1px 1px 10px 0 rgba(0,0,0,0.10)" };

export default function Home() {
  return (
    <main className="flex container mx-auto justify-between gap-10 mb-20 flex-col sm:flex-row">
      <div className="flex flex-col gap-10 flex-1 ">
        <DeliveryInformation />
        <ScheduleDelivery />
        <PaymentMethod />
      </div>
      <OrderSummary />
    </main>
  );
}

function PaymentMethod() {
  return (
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
  );
}
