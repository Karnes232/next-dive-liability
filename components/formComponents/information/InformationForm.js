import React from "react"
import Name from "./Name"
import Contact from "./Contact"
import Address from "./Address"
import { useState } from "react"
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs"
const InformationForm = ({ informationState, setInformationState, errors }) => {
  const [readMore, setReadMore] = useState(false)
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setInformationState({
      ...informationState,
      [e.target.name]: value,
    })
  }

  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Participant Information</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">This field is required</div>
      )}
      {readMore ? (
        <>
          <section className="p-5">
            <Name
              handleChange={handleChange}
              informationState={informationState}
            />
            <Contact
              handleChange={handleChange}
              informationState={informationState}
            />
            <Address
              handleChange={handleChange}
              informationState={informationState}
            />
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default InformationForm
