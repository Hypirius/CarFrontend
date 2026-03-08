function SearchResults({ results }: { results: string }) {
  return <div>{JSON.stringify(results["data"])}</div>
}

export default SearchResults
