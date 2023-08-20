import React, { useState } from "react"
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs"

import {
  medicalStatement,
  medicalStatement2,
  medicalQuestions,
} from "../../../data/medicalStatement"
import MedicalCard from "./MedicalCard"
const MedicalForm = ({ medicalState, setMedicalState }) => {
  const [readMoreMedicalStatement, setReadMoreMedicalStatement] =
    useState(false)
  const [readMoreForm, setReadMoreForm] = useState(false)
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setMedicalState({
      ...medicalState,
      [e.target.name]: value,
    })
  }
  return (
    <div className="mt-5 mb-10 block  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div onClick={e => setReadMoreForm(!readMoreForm)}>
        <div className="p-2 text-sm bg-slate-200 w-full flex justify-between items-center">
          <div>Please Complete the form </div>
          <div className="pr-1 text-lg">
            {" "}
            {readMoreForm ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
        <div className="p-2 text-lg bg-slate-200">
          Diver Medical Participant Questionnaire
        </div>
      </div>
      {readMoreForm ? (
        <div className="mt-2">
          <section className="m-2 block bg-white border border-gray-200 rounded-lg shadow">
            <p className="text-gray-700 text-base m-4">
              {readMoreMedicalStatement ? (
                <>
                  {medicalStatement}
                  <br />
                  <br />
                  {medicalStatement2}
                </>
              ) : (
                `${medicalStatement.substring(0, 150)}...`
              )}
              <br />
              <button
                className="text-blue-700"
                onClick={e => {
                  e.preventDefault()
                  setReadMoreMedicalStatement(!readMoreMedicalStatement)
                }}
              >
                {readMoreMedicalStatement ? "show less" : "read more"}
              </button>
            </p>
          </section>
          <section className="flex flex-col justify-center items-center mx-2 space-y-2">
            <div className="text-2xl my-2">Directions</div>
            <p className="text-xs font-medium">
              Complete this questionnaire as a prerequisite to a recreational
              scuba diving or freediving course
            </p>
            <p className="text-xs">
              <span className="font-medium">Note to women:</span> If you are
              pregnant, or attempting to become pregnant, do not dive.
            </p>
          </section>
          <section className="my-8 mx-2 block bg-white border border-gray-200 rounded-lg shadow">
            <main className="text-xs flex flex-col">
              {medicalQuestions.map((question, index) => {
                return (
                  <MedicalCard
                    key={index}
                    question={question}
                    handleChange={handleChange}
                  />
                )
              })}
            </main>
          </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default MedicalForm
