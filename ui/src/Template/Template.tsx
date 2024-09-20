import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  buttonText?: string;
  placeholder: string;
};

export const Input = ({ label, ...props }: Props) => {
  return (
    <div>
      {label ? <label htmlFor={label}>{label}</label> : null}
      <input
        id={label}
        {...props}
      />
    </div>
  );
};
