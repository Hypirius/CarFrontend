import {
  type SetStateAction,
  type Dispatch,
  type ChangeEvent,
  type HTMLInputTypeAttribute,
} from "react"

type InputProps = {
  updateStateFn: Dispatch<SetStateAction<string>>
  value: string
  id?: string
  type?: HTMLInputTypeAttribute
}

export default function Input({ updateStateFn, value, id, type }: InputProps) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    updateStateFn(e.target.value)
  }

  return (
    <input
      onChange={handleOnChange}
      type={type ? type : "text"}
      required
      value={value}
      id={id ? id : ""}
    />
  )
}
