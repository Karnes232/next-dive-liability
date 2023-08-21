import { db } from "@/Firebase/config"
import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"

const View = () => {
  const [liabilityForms, setLiabilityForms] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "liability"))

      querySnapshot.forEach(doc => {
        let data = doc.data()
        data.id = doc.id
        setLiabilityForms(liabilityForms => [...liabilityForms, data])
      })
    }
    fetchData().catch(console.error)
  }, [])
  const sortedDate = liabilityForms.sort((a, b) => b.created - a.created)
  return (
    <div className="max-w-4xl mx-auto">
      {sortedDate.map((form, index) => {
        const newDate = new Date(form.created.seconds * 1000)
        console.log(form)

        return (
          <div key={index} className="flex w-full space-x-16 h-7 my-1 mx-5">
            <div className="w-24">
              {newDate.getDate()} - {newDate.getMonth() + 1} -{" "}
              {newDate.getFullYear()}
            </div>
            <a href={form.url}>
              <div className="w-56">{form.name}</div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default View
