"use client";

import DeliveryInformation from "@/components/DeliveryInformation";
import Input from "@/components/Input";
import OrderSummary from "@/components/OrderSummary";
import ScheduleDelivery from "@/components/ScheduleDelivery";

import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import { boxShadow } from "./offlineData";

export default function Home() {
  return (
    <main className="flex container mx-auto justify-between sm:gap-10 sm:mb-20 flex-col sm:flex-row">
      <div className="flex flex-col sm:gap-10 flex-1 ">
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
    <Wrapper title="Payment method">
      <motion.div
        className="form bg-white sm:p-10 px-4 py-2 xl:flex"
        whileHover={boxShadow}
      >
        <Input
          label="online payment"
          type="checkbox"
          placeholder="online payment"
        />
        <Input label="cash on delivery" type="checkbox" />
        <Input label="POS on delivery" type="checkbox" />
      </motion.div>
    </Wrapper>
  );
}
