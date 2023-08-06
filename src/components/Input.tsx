export interface InputProps {
  label: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
}

export default function Input(props: InputProps) {
  const { label, placeholder, type } = props

  return (
    <div className='flex w-full flex-col gap-2 font-sans text-sm capitalize leading-7 last:col-start-1 last:col-end-3'>
      {type === 'checkbox' ? (
        <label className='flex gap-5'>
          <input type='checkbox' name='radio' />
          {label}
          <span className='checkmark'></span>
        </label>
      ) : (
        <>
          <label htmlFor={label} className=''>
            {label}
          </label>
          <input
            id={label}
            type={type}
            placeholder={placeholder}
            autoComplete={label === 'address' ? 'address' : placeholder}
            className='w-full appearance-none px-5 py-2 font-gerbera ring-1 ring-gray-200 placeholder:font-normal placeholder:text-gray-300 hover:ring-gray-400 active:ring-black'
          />
        </>
      )}
    </div>
  )
}
