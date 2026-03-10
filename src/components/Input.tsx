import {
  type SetStateAction,
  type Dispatch,
  type ChangeEvent,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
} from "react"

type InputProps<T extends string | number> =
  InputHTMLAttributes<HTMLInputElement> & {
    updateStateFn: Dispatch<SetStateAction<T>>
    value: T
    id?: string
    type?: HTMLInputTypeAttribute
  }

function Input<T extends string | number>({
  updateStateFn,
  value,
  id,
  type = "text",
  ...props
}: InputProps<T>) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    let changeValue: string | number = e.target.value
    if (typeof value === "number") {
      changeValue = Number(changeValue)
    }
    updateStateFn(changeValue as T)
  }

  return (
    <input
      onChange={handleOnChange}
      type={type}
      required
      value={value}
      {...props}
      id={id ? id : ""}
    />
  )
}

export default Input
