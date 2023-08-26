import {
  standardSafeStatement1,
  standardSafeStatement10,
  standardSafeStatement11,
  standardSafeStatement12,
  standardSafeStatement13,
  standardSafeStatement2,
  standardSafeStatement3,
  standardSafeStatement4,
  standardSafeStatement5,
  standardSafeStatement6,
  standardSafeStatement7,
  standardSafeStatement8,
  standardSafeStatement9,
} from "@/data/standardSafeDiving"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const StandardSafeDiving = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("StandardSafe.title")}</div>
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
                {t("StandardSafe.standardSafeStatement1")}{" "}
              </p>
              <p className="text-gray-700 text-base m-4">
                {" "}
                {t("StandardSafe.I")},
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {t("StandardSafe.standardSafeStatement2")}
              </p>
              <ol type="1" className="list-decimal ml-4">
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement3")}
                </li>

                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement4")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement5")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement6")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement7")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement8")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement9")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement10")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement11")}
                </li>
                <li className="text-gray-700 text-base m-4 pl-1">
                  {t("StandardSafe.standardSafeStatement12")}
                </li>
              </ol>
              <p className="text-gray-700 text-base m-4">
                {t("StandardSafe.standardSafeStatement13")}
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

export default StandardSafeDiving
