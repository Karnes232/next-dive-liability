import React from "react"
import { useTranslation } from "react-i18next"

const ConsentComponent = ({ consent, setConsent }) => {
  const { t } = useTranslation()
  const handleChange = e => {
    setConsent(e.target.checked)
  }
  return (
    <div className="mt-5 flex space-x-2">
      <div>
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className="w-4"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="consent" className="text-xs">
        {t("Signature.consent")}
      </label>
    </div>
  )
}

export default ConsentComponent
