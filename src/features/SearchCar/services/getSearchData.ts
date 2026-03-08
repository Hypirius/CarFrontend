import axios from "axios"

async function getSearchData(query: string) {
  try {
    const res = await axios.get("http://localhost:6500/search", {
      params: { q: query },
    })
    if (res.statusText !== "OK") {
      throw new Error("Error fetching data")
    }

    return res
  } catch (err) {
    console.log(err)
  }
}

export default getSearchData
