import { HTMLAttributes } from "react";
import { ButtonProps } from "../Template2/Button";

type Props = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  buttonText?: string;
  placeholder: string;
};

export const Input = ({ label, buttonText, ...props }: Props) => {
  return (
    <div>
      {label ? <label htmlFor={label}>{label}</label> : null}
      <input id={label} {...props} />
    </div>
  );
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  didsabled?: boolean;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
