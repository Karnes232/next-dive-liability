import React from "react"

const SecondaryMedical = ({
  question,
  handleChange,
  state,
  translatedQuestion,
}) => {
  let defaultYes = undefined
  let defaultNo = undefined
  if (state.key === "Yes") {
    defaultYes = true
    defaultNo = false
  } else {
    defaultYes = false
    defaultNo = true
  }
  return (
    <>
      <div className="border-b ml-5">
        <div className="flex justify-between m-4">
          <p className="mr-5 w-56 md:w-96 italic">{translatedQuestion}</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center">
              <input
                id={`${question.Id}-yes`}
                type="radio"
                value="Yes"
                name={`${question.Id}`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={handleChange}
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
                onChange={handleChange}
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
    </>
  )
}

export default SecondaryMedical
