export interface InputProps {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input(props: InputProps) {
  const { label, placeholder, type } = props;

  return (
    <div className="flex flex-col capitalize gap-2 font-sans text-sm w-full last:col-end-3 last:col-start-1 leading-7">
      {type === "checkbox" ? (
        <label className="flex gap-5">
          <input type="checkbox" name="radio" />
          {label}
          <span className="checkmark"></span>
        </label>
      ) : (
        <>
          <label htmlFor={label} className="">
            {label}
          </label>
          <input
            id={label}
            type={type}
            placeholder={placeholder}
            autoComplete={label === "address" ? "address" : placeholder}
            className="px-5 py-2 ring-1 ring-gray-200 active:ring-black appearance-none w-full hover:ring-gray-400 placeholder:font-normal placeholder:text-gray-300 font-gerbera"
          />
        </>
      )}
    </div>
  );
}
