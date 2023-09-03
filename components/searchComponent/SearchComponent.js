import { db } from "@/Firebase/config"
import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import Search from "@/components/searchBar/search"
const SearchComponent = ({ liabilityLocation }) => {
  const [liabilityForms, setLiabilityForms] = useState([])
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, liabilityLocation))

      querySnapshot.forEach(doc => {
        let data = doc.data()
        data.id = doc.id
        setLiabilityForms(liabilityForms => [...liabilityForms, data])
      })
    }
    fetchData().catch(console.error)
  }, [])
  const sortedDate = liabilityForms.sort((a, b) => b.created - a.created)
  const filteredData = sortedDate.filter(liability => {
    if (searchValue === "") {
      return liability
    } else {
      return liability.name
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    }
  })

  return (
    <div className="max-w-4xl mx-auto">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredData.map((form, index) => {
        const newDate = new Date(form.created.seconds * 1000)

        return (
          <div
            key={index}
            className="flex w-full space-x-16 border my-2 py-1 px-2"
          >
            <div className="w-28">
              {newDate.getDate()} - {newDate.getMonth() + 1} -{" "}
              {newDate.getFullYear()}
            </div>
            <a href={form.url}>
              <div className="">{form.name}</div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SearchComponent
