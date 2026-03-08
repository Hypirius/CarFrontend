import { useState } from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import { useSearchCar } from "./hooks/useSearchCar"

export default function SearchCar() {
  const [query, setQuery] = useState("")
  const { data, isLoading, error } = useSearchCar(query)

  console.log(query)

  return (
    <div>
      <SearchForm updateQueryFn={setQuery} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error has occured</div>
      ) : (
        <SearchResults results={data ? data : ""} />
      )}
    </div>
  )
}
