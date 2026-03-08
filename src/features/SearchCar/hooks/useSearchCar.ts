import { useQuery } from "@tanstack/react-query"
import getSearchData from "../services/getSearchData"

function useSearchCar(query: string) {
  return useQuery({
    queryKey: ["Cars"],
    queryFn: () => getSearchData(query),
    enabled: query ? true : false,
  })
}

export { useSearchCar }
