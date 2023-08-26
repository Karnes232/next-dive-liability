import React, { useState } from "react"
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs"

import {
  medicalStatement,
  medicalStatement2,
  medicalQuestions,
} from "../../../data/medicalStatement"
import MedicalCard from "./MedicalCard"
import { useTranslation } from "react-i18next"
const MedicalForm = ({
  medicalState,
  setMedicalState,
  errors,
  readMoreForm,
  setReadMoreForm,
}) => {
  const { t } = useTranslation()
  const [readMoreMedicalStatement, setReadMoreMedicalStatement] =
    useState(false)
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
          <div>{t("MedicalForm.subtitle")} </div>
          <div className="pr-1 text-lg">
            {" "}
            {readMoreForm ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
        <div className="p-2 text-lg bg-slate-200">{t("MedicalForm.title")}</div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">{t("MedicalForm.error")}</div>
      )}
      {readMoreForm ? (
        <div className="mt-2">
          <section className="m-2 block bg-white border border-gray-200 rounded-lg shadow">
            <p className="text-gray-700 text-base m-4">
              {readMoreMedicalStatement ? (
                <>
                  {t("MedicalForm.medicalStatement")}
                  <br />
                  <br />
                  {t("MedicalForm.medicalStatement")}
                </>
              ) : (
                `${t("MedicalForm.medicalStatement").substring(0, 150)}...`
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
            <div className="text-2xl my-2">{t("MedicalForm.directions")}</div>
            <p className="text-xs md:text-sm font-medium">
              {t("MedicalForm.directions-sub")}
            </p>
            <p className="text-xs md:text-sm ">
              <span className="font-medium">{t("MedicalForm.women")} </span>
              {t("MedicalForm.note")}
            </p>
          </section>
          <section className="my-8 mx-2 block bg-white border border-gray-200 rounded-lg shadow">
            <main className="text-xs md:text-sm  flex flex-col">
              {medicalQuestions.map((question, index) => {
                let state = {}

                for (const [key, value] of Object.entries(medicalState)) {
                  if (key === question.Id) {
                    state = { key: value }
                  }
                }
                return (
                  <>
                    <MedicalCard
                      key={index}
                      question={question}
                      handleChange={handleChange}
                      state={state}
                      medicalState={medicalState}
                      translatedQuestion={t(question.question)}
                    />
                  </>
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
