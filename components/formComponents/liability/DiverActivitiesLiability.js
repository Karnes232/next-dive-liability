import { diveCenter } from "@/data/diveCenter"
import {
  activitiesRelease1,
  activitiesRelease10,
  activitiesRelease11,
  activitiesRelease12,
  activitiesRelease13,
  activitiesRelease2,
  activitiesRelease3,
  activitiesRelease4,
  activitiesRelease5,
  activitiesRelease6,
  activitiesRelease7,
  activitiesRelease8,
  activitiesRelease9,
} from "@/data/diverActivitiesRelease"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const DiverActivitiesLiability = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("DiverActivitiesLiability.title")}</div>
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
                {t("DiverActivitiesLiability.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("DiverActivitiesLiability.activitiesRelease1")},
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease2")}{" "}
                <span class="italic">{diveCenter}</span>,{" "}
                {t("DiverActivitiesLiability.activitiesRelease3")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease4")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease5")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease6")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease7")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease8")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease9")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease10")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease11")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease12")}{" "}
              </p>

              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DiverActivitiesLiability.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("DiverActivitiesLiability.activitiesRelease13")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {t("DiverActivitiesLiability.activitiesRelease14")}{" "}
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

export default DiverActivitiesLiability
