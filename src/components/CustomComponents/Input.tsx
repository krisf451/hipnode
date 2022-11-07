type FormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  styles?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  onClick?: () => void;
  [x: string] : unknown
}

const Input = ({ label, icon, type = 'text', name, value, onChange, handleClick, styles, ...rest }: FormInputProps) => (
  <div className={`${icon ? 'relative' : ''} flex flex-col gap-2 w-full`}>
    <label
      htmlFor={name}
      className='tracking-wide text-gray-600 dark:text-white'
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      {...rest}
      className={`rounded-lg bg-[#E7ECF3] dark:bg-cBlack-2 h-[48px] px-4 border border-gray-200 dark:border-cBlack-2 placeholder:text-cBlack-6 focus:outline-none dark:focus:border-cBlack-2 placeholder:text-sm ${styles}`}
    />
    {icon && (
    <button
      type='button'
      className='absolute top-[45px] right-[10px] text-2xl text-gray-400 dark:text-gray-200'
      onClick={handleClick}
    >
      {icon}
    </button>

    )}
  </div>
);

export default Input;
