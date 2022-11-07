import { ReactNode } from 'react';

type CustomButtonProps ={
  styles: string;
  children: ReactNode;
  handleClick: () => void;
}

const Button = ({ styles, children, handleClick }: CustomButtonProps) => (
  <button
    type='button'
    className={styles}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
