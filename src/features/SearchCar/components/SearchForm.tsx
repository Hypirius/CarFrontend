import Input from "@/components/Input"
import { useState } from "react"

function SearchForm() {
  const [value, setValue] = useState("")

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search Car: </label>
      <Input id="search-input" value={value} updateStateFn={setValue} />
      <button type="submit">Enter query</button>
    </form>
  )
}

export default SearchForm
