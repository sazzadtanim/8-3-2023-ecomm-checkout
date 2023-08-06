import { boxShadow } from '@/app/offlineData'
import { motion } from 'framer-motion'
import Input, { InputProps } from './Input'
import Wrapper from './Wrapper'

const inputList: InputProps[] = [
  { label: 'name', placeholder: 'Bryan Cranston' },
  { label: 'mobile number', placeholder: '+1 424-236-3574', type: 'number' },
  { label: 'email', placeholder: 'example@email.com', type: 'email' },
  { label: 'city', placeholder: 'Hawthorne' },
  { label: 'state', placeholder: 'California' },
  { label: 'ZIP', placeholder: '90250', type: 'number' },
  { label: 'address', placeholder: '4796 libby street', type: 'text' },
]

export default function DeliveryInformation() {
  return (
    <Wrapper title='Delivery Information'>
      <motion.div
        className='form space-y-3 bg-white p-4 lg:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 sm:p-10'
        whileHover={boxShadow}
      >
        {inputList.map((input, index) => (
          <Input key={index} {...input} />
        ))}
      </motion.div>
    </Wrapper>
  )
}
