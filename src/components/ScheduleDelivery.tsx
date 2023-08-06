import { boxShadow } from '@/app/offlineData'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Input from './Input'

export default function ScheduleDelivery() {
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  const buttonStyles = {
    left: 'justify-start ',
    right: 'justify-end ',
  }

  const roundbuttonStyles = {
    left: ' bg-gray-400',
    right: ' bg-gray-100',
  }
  return (
    // on all devices except small devices I have to show this.// hidden, sm:bolck

    <div className='schedule_delivery' title='Schedule Delivery'>
      <>
        <div className='flex gap-10 bg-white px-4 py-4 font-gerbera capitalize sm:mb-6 sm:bg-transparent sm:px-0 sm:py-0'>
          schedule delivery
          <div
            className={`flex h-6 w-9 items-center rounded-2xl bg-[#22331D] ${
              isOn ? buttonStyles['right'] : buttonStyles['left']
            } `}
            onClick={toggleSwitch}
          >
            <motion.div
              className={`mx-1 h-4 w-4 rounded-full ${
                isOn ? roundbuttonStyles['right'] : roundbuttonStyles['left']
              }`}
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
          </div>
        </div>
      </>
      {isOn && (
        // on small devices I have show only this.
        <motion.div
          className='form flex select-none flex-col gap-5 bg-white p-4 sm:p-10'
          initial={{ y: 20, opacity: 0 }}
          exit={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={boxShadow}
          transition={{ duration: 0.3 }}
        >
          <Input
            label='Date'
            placeholder='17 Apr, 23  -  19 Apr, 23'
            type='date'
          />
          <Input label='note' placeholder='Type your note' type={'text'} />
        </motion.div>
      )}
    </div>
  )
}
