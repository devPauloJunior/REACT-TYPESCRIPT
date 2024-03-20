import { InputProps } from "../../interfaces/InputInterface"

export function Input({ type, placeholder, name }: InputProps) {
  return (
    <div>
        <input 
            type={type}
            placeholder={placeholder}
            name={name} 
        />
    </div>
  )
}
