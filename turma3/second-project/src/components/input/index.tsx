import { InputProps } from "../../interfaces/InputInterface"

export function Input({ type, placeholder, name, register, error, rules }: InputProps) {
  return (
    <div>
        <input 
            type={type}
            placeholder={placeholder}
            {...register(name, rules)}
            id={name}
        />
        { error && <p>{ error }</p> }
    </div>
  )
}
