export interface InputProps {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input(props: InputProps) {
  const { label, placeholder, type } = props;
  
  return (
    <div className="flex flex-col capitalize gap-2 font-sans text-sm w-full last:col-end-3 last:col-start-1 leading-7">
      <label htmlFor="" className="">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-5 py-2 ring-1 ring-gray-200 active:ring-black appearance-none w-full"
      />
    </div>
  );
}
