import { FormEvent } from 'react'

interface InputProps {
  placeholder: string
  name: string
  type: string
  value: string
  handleChange(e: FormEvent<HTMLInputElement>, name: string): void
}

const Input = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}: InputProps) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    name={name}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism my-2 w-full rounded-sm border-none bg-transparent p-2 text-sm text-white outline-none"
  />
)

export default Input
