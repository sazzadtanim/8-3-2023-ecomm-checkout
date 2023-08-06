'use client'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export interface ProductCardProps {
  image?: StaticImageData
  title: string
  model: string
  price: string
}

function ProductCard(props: ProductCardProps) {
  const { model, title, price, image } = props
  const [counter, setCounter] = useState(1)
  return (
    <div title={title} className='flex items-center justify-between'>
      <div className='flex items-center justify-center gap-5'>
        <Image
          alt=''
          src={image ?? ''}
          className='sm:h-16 sm:w-16 object-contain w-14 h-14'
          priority
        />
        <div className='grid font-sans leading-6'>
          <span className='text-xs font-bold text-gray-800 sm:text-base sm:font-semibold'>
            {title}
          </span>
          <span className='text-xs text-gray-400 sm:text-sm '>{model}</span>
          <span className='font-sans text-sm font-semibold sm:text-base'>
            ${price}
          </span>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 px-3 py-[1px] ring-1 ring-gray-200 sm:px-4 sm:py-2'>
        <button className='text-2xl' onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span className='font-sans font-medium text-sm sm:text-base'>
          {counter < 10 && counter > 0 ? `0${counter}` : counter}
        </span>
        <button className='text-2xl' onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard
