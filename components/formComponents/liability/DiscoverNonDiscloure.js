import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"
import { nonDisclouser } from "../../../data/nonDisclosure"
import { useTranslation } from "react-i18next"
import { diveCenter } from "@/data/diveCenter"
const DiscoverNonDiscloure = () => {
  const { t } = useTranslation()
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("NonDisclosure.title")}</div>
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
                {t("NonDisclosure.part1")}{" "}
                <span className="italic">{diveCenter}</span>{" "}
                {t("NonDisclosure.part2")}{" "}
                <span className="italic">{diveCenter}</span>{" "}
                {t("NonDisclosure.part3")}{" "}
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

export default DiscoverNonDiscloure
