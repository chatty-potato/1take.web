import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLInputElement> & {
    label?: string,
}

const Input = ({label, ...props}: Props) => {
  return (
    <div>
        {label ? <label>{label}</label> : null}
        <input {...props} />
    </div>
  )
}

export default Input;