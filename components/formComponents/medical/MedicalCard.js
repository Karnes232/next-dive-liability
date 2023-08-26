import React, { useState } from "react"
import SecondaryMedical from "./SecondaryMedical"
import { useTranslation } from "react-i18next"

const MedicalCard = ({
  question,
  handleChange,
  state,
  medicalState,
  translatedQuestion,
}) => {
  const { t } = useTranslation()
  const [yes, setYes] = useState(false)
  const handleSelect = e => {
    handleChange(e)
    if (e.target.value == "Yes") {
      setYes(true)
    } else {
      setYes(false)
    }
  }
  let defaultYes = undefined
  let defaultNo = undefined
  if (state.key === "Yes") {
    defaultYes = true
    defaultNo = false
  } else if (state.key === "No") {
    defaultYes = false
    defaultNo = true
  }
  return (
    <>
      <div className="border-b">
        <div className="flex justify-between m-4">
          <p className="mr-5 w-56 md:w-96">{translatedQuestion}</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center">
              <input
                id={`${question.Id}-yes`}
                type="radio"
                value="Yes"
                name={`${question.Id}`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={handleSelect}
                defaultChecked={defaultYes}
              />
              <label
                htmlFor={`${question.Id}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id={`${question.Id}-no`}
                type="radio"
                value="No"
                name={`${question.Id}`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={handleSelect}
                defaultChecked={defaultNo}
              />
              <label
                htmlFor={`${question.Id}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      {yes ? (
        question.secondaryQuestions.map((question, index) => {
          let state = {}

          for (const [key, value] of Object.entries(medicalState)) {
            if (key === question.Id) {
              state = { key: value }
            }
          }
          return (
            <SecondaryMedical
              key={index}
              question={question}
              handleChange={handleChange}
              state={state}
              translatedQuestion={t(question.question)}
            />
          )
        })
      ) : (
        <></>
      )}
    </>
  )
}

export default MedicalCard
