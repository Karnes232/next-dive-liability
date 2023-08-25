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
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const DiverActivitiesLiability = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Liability Release and Assumption of Risk Agreement</div>
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
                I,
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {activitiesRelease1}
              </p>
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease2 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease3 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease4 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease5 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease6 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease7 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease8 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease9 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease10 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease11 }}
              />
              <p className="text-gray-700 text-base m-4">
                {" "}
                I,
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {activitiesRelease12}
              </p>
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: activitiesRelease13 }}
              />
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
