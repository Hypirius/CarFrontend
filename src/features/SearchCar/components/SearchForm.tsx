import Input from "@/components/Input"

function SearchForm() {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search Car</label>
      <Input id="search-input" />
      <button type="submit">Enter query</button>
    </form>
  )
}

export default SearchForm
