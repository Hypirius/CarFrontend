import Input from "@/components/Input"
import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react"

function SearchForm({
  updateQueryFn,
}: {
  updateQueryFn: Dispatch<SetStateAction<string>>
}) {
  const [value, setValue] = useState("")

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    updateQueryFn(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search Car: </label>
      <Input id="search-input" value={value} updateStateFn={setValue} />
      <button type="submit">Enter query</button>
    </form>
  )
}

export default SearchForm
