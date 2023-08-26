import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"
import {
  liabilityRelease1,
  liabilityRelease10,
  liabilityRelease11,
  liabilityRelease12,
  liabilityRelease2,
  liabilityRelease3,
  liabilityRelease4,
  liabilityRelease5,
  liabilityRelease6,
  liabilityRelease7,
  liabilityRelease8,
  liabilityRelease9,
} from "../../../data/liabilityRelease"
import { useTranslation } from "react-i18next"
import { diveCenter } from "@/data/diveCenter"
const DiscoverLiability = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("DsdLiabilityRelease.title")}</div>
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
                {t("DsdLiabilityRelease.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("DsdLiabilityRelease.liabilityRelease1")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease2")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease3")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease4")}{" "}
                <span class="italic">{diveCenter}</span>{" "}
                {t("DsdLiabilityRelease.liabilityRelease5")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease6")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease7")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease8")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease9")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease10")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease11")}
              </p>

              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("DsdLiabilityRelease.liabilityRelease12")}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("DsdLiabilityRelease.liabilityRelease13")}
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

export default DiscoverLiability
