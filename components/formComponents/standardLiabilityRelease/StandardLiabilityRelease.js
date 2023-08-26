import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"
import { useTranslation } from "react-i18next"
import { diveCenter } from "@/data/diveCenter"

const StandardLiabilityRelease = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("StandardLiabilityRelease.title")}</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {readMore ? (
        <>
          <div className="mt-2">
            <section className="m-2 block bg-white border border-gray-200 rounded-lg shadow">
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("StandardLiabilityRelease.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("StandardLiabilityRelease.liabilityRelease1")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease2")}{" "}
                <span class="italic">{diveCenter}</span>{" "}
                {t("StandardLiabilityRelease.liabilityRelease3")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease4")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease5")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease6")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease7")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease8")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease9")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease10")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("StandardLiabilityRelease.liabilityRelease11")}{" "}
                <span class="italic">{diveCenter}</span>{" "}
                {t("StandardLiabilityRelease.liabilityRelease12")}{" "}
                <span class="italic">{diveCenter}</span>{" "}
                {t("StandardLiabilityRelease.liabilityRelease13")}{" "}
                <span class="italic">{diveCenter}</span>{" "}
                {t("StandardLiabilityRelease.liabilityRelease14")}
              </p>
            </section>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default StandardLiabilityRelease
