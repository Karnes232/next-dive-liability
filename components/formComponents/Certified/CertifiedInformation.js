import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const CertifiedInformation = ({
  certifiedState,
  setCertifiedState,
  errors,
}) => {
  const [readMore, setReadMore] = useState(false)

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setCertifiedState({
      ...certifiedState,
      [e.target.name]: value,
    })
  }
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Certification Information</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">
          Participant Information Is Required
        </div>
      )}
      {readMore ? (
        <>
          <section className="p-5">
            <div className="flex justify-between">
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="date"
                  name="lastDive"
                  id="lastDive"
                  className="contactFormInput peer min-h-[2.8rem]"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.lastDive}
                />
                <label htmlFor="lastDive" className="contactFormLabel">
                  Last Dive
                </label>
              </div>
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="number"
                  name="totalDives"
                  id="totalDives"
                  className="contactFormInput peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.totalDives}
                />
                <label htmlFor="totalDives" className="contactFormLabel">
                  Number of Dives
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="date"
                  name="depDive"
                  id="depDive"
                  className="contactFormInput peer min-h-[2.8rem]"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.depDive}
                />
                <label htmlFor="depDive" className="contactFormLabel">
                  Depature Date
                </label>
              </div>
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="file"
                  name="certImage"
                  id="certImage"
                  className="contactFormInput peer"
                  accept="image/*"
                  placeholder=" "
                  required
                  // onChange={handleChange}
                />
                <label htmlFor="certImage" className="contactFormLabel">
                  Upload Certification
                </label>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CertifiedInformation
