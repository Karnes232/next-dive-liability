import React from "react"
import { useTranslation } from "react-i18next"

const Name = ({ handleChange, informationState }) => {
  const { t } = useTranslation()
  return (
    <>
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
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className="contactFormInput peer min-h-[2.8rem]"
          placeholder=" "
          required
          onChange={handleChange}
          value={informationState.birthdate}
        />
        <label htmlFor="birthdate" className="contactFormLabel">
          {t("InformationForm.birthdate")}
        </label>
      </div>
    </>
  )
}

export default Name
