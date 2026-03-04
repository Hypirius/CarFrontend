import { useState, type ChangeEvent } from "react"

export default function Input({ id }: { id?: string }) {
  const [value, setValue] = useState("")

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  return (
    <input
      onChange={handleInput}
      type="text"
      required
      value={value}
      id={id ? id : ""}
    />
  )
}
