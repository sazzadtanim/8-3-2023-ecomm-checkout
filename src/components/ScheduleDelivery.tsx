import { boxShadow } from "@/app/offlineData";
import { motion } from "framer-motion";
import { useState } from "react";
import Input from "./Input";

export default function ScheduleDelivery() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const buttonStyles = {
    left: "justify-start ",
    right: "justify-end ",
  };

  const roundbuttonStyles = {
    left: " bg-gray-400",
    right: " bg-gray-100",
  };
  return (
    // on all devices except small devices I have to show this.// hidden, sm:bolck

    <div className="schedule_delivery" title="Schedule Delivery">
      <>
        <div className="font-gerbera capitalize sm:mb-6 flex gap-10 bg-white sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0">
          schedule delivery
          <div
            className={`bg-[#22331D] flex h-6 w-9 rounded-2xl items-center ${
              isOn ? buttonStyles["right"] : buttonStyles["left"]
            } `}
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
        // on small devices I have show only this.
        <motion.div
          className="form bg-white sm:p-10 flex flex-col gap-5 select-none p-4"
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
  );
}
