import React, { useState } from "react"
import i18n from "../../i18n/index"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language) // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = e => {
    e.preventDefault()
    i18n.changeLanguage(e.target.value) // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value)
  }

  return (
    <div className="flex justify-end px-2 max-w-4xl mx-auto">
      <select
        defaultValue={selectedLanguage}
        onChange={chooseLanguage}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      >
        <option value="en">English</option>
        <option value="es">Espanol</option>
      </select>
    </div>
  )
}

export default LanguageSelector
