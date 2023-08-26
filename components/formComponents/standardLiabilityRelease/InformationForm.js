import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const InformationForm = ({ informationState, setInformationState, errors }) => {
  const { t } = useTranslation()
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
        <div>{t("InformationForm.title")}</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">{t("InformationForm.error")}</div>
      )}
      {readMore ? (
        <>
          <section className="p-5">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="firstName"
                id="firstName"
                className="contactFormInput peer"
                autoComplete="given-name"
                placeholder=" "
                required
                onChange={handleChange}
                value={informationState.firstName}
              />
              <label htmlFor="firstName" className="contactFormLabel">
                {t("InformationForm.firstName")}
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="lastName"
                id="lastName"
                className="contactFormInput peer"
                autoComplete="family-name"
                placeholder=" "
                required
                onChange={handleChange}
                value={informationState.lastName}
              />
              <label htmlFor="lastName" className="contactFormLabel">
                {t("InformationForm.lastName")}
              </label>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default InformationForm
