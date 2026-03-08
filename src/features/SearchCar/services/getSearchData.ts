import axios from "axios"

async function getSearchData(query: string) {
  try {
    const res = await axios.get("localhost://6000", { params: query })
    if (res.statusText !== "OK") {
      throw new Error("Error fetching data")
    }
  } catch (err) {
    console.log(err)
  }
}

export default getSearchData
