import { ReactNode } from 'react'
import Headline from './Headline'

export default function Wrapper(props: { children: ReactNode; title: string }) {
  return (
    <div className='payment_method py-5 sm:mb-10 sm:py-0' title={props.title}>
      <Headline title={props.title} />
      {props.children}
    </div>
  )
}
