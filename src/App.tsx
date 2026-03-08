import SearchCar from "./features/SearchCar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SearchCar />
      </QueryClientProvider>
    </div>
  )
}

export default App
