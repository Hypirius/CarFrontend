import { type SetStateAction, type Dispatch, type ChangeEvent } from "react"

type InputProps = {
  updateStateFn: Dispatch<SetStateAction<string>>
  value: string
  id?: string
}

export default function Input({ updateStateFn, value, id }: InputProps) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    updateStateFn(e.target.value)
  }
  return (
    <input
      onChange={handleOnChange}
      type="text"
      required
      value={value}
      id={id ? id : ""}
    />
  )
}
