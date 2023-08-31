"use client"
import { useTranslation } from "react-i18next"
import React from "react"
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer"
import { diveCenter } from "@/data/diveCenter"
const padiLogo = "https://i.ibb.co/1rch08r/padiLogo.jpg"
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 25,
    paddingHorizontal: 35,
  },
  generalLiability: {
    fontSize: 10,
    marginVertical: 2,
  },
  nonDisclosure: {
    fontSize: 9,
    marginVertical: 4,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    maxWidth: 320,
    marginLeft: 20,
  },
  titleInformation: {
    fontSize: 24,
    textAlign: "center",
  },
  headerImageContainer: {
    maxWidth: 120,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightColumnMedical: {
    flexDirection: "column",
    width: 70,
    paddingTop: 5,
    paddingRight: 15,
  },
  leftColumnMedical: {
    flexDirection: "column",
    width: 400,
    paddingTop: 2,
    paddingRight: 15,
  },
  image: {
    height: 100,
    width: 200,
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    paddingBottom: 5,
    paddingLeft: 20,
  },
  eSign: {
    fontSize: 8,
    marginVertical: 4,
  },
  leftColumnEsign: {
    width: 50,
  },
  rightColumnEsign: {
    width: 400,
  },
  eSignContainer: {
    flexDirection: "row",
  },
  eSignImage: {
    width: 15,
    height: 15,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  rightColumn: {
    flexDirection: "column",
    width: 570,
    paddingTop: 5,
    paddingRight: 15,
    height: 100,
  },
  informationDivText: {
    fontSize: 14,
    marginVertical: 4,
  },
  informationDiv: {
    marginTop: 15,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    height: 35,
  },
  medicalDiv: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  leftColumn: {
    flexDirection: "column",
    width: 570,
    paddingTop: 5,
    paddingRight: 15,
    height: 100,
  },
  medicalDivText: {
    fontSize: 10,
    height: 40,
  },
  medicalDivTextSecondary: {
    fontSize: 10,
    paddingLeft: 10,
    paddingVertical: 5,
    height: 35,
  },
})

const PDFFileDSD = ({ informationState, medicalState, signature }) => {
  const { t } = useTranslation()
  let today = new Date().toLocaleDateString()
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image src={padiLogo} style={styles.logo} alt="Logo" />
          </View>
          <Text style={styles.title}>{t("DsdLiabilityRelease.title")}</Text>
        </View>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.I")},{" "}
          <Text style={{ fontFamily: "Times-Italic" }}>
            {informationState?.firstName} {informationState?.lastName}
          </Text>
          ,{t("DsdLiabilityRelease.liabilityRelease1")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease2")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease3")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease4")},{" "}
          <Text style={{ fontFamily: "Times-Italic" }}>{diveCenter}</Text>,{" "}
          {t("DsdLiabilityRelease.liabilityRelease5")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease6")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease7")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease8")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease9")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease10")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease11")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.I")},{" "}
          <Text style={{ fontFamily: "Times-Italic" }}>
            {informationState?.firstName} {informationState?.lastName}
          </Text>
          ,{t("DsdLiabilityRelease.liabilityRelease12")}
        </Text>
        <Text style={styles.nonDisclosure}>
          {t("DsdLiabilityRelease.liabilityRelease13")}
        </Text>
        <View style={styles.leftColumnMedical}>
          <Image
            src={signature}
            source={signature}
            alt="Signature"
            style={styles.image}
          />
        </View>
        <Text style={styles.generalLiability}>{today}</Text>
        <View style={styles.eSignContainer}>
          <View style={styles.leftColumnEsign}>
            <Image
              src="https://static-00.iconduck.com/assets.00/checkmark-icon-2048x1708-h04h2jee.png"
              source="https://static-00.iconduck.com/assets.00/checkmark-icon-2048x1708-h04h2jee.png"
              alt="checkmark"
              style={styles.eSignImage}
            />
          </View>
          <View style={styles.rightColumnEsign}>
            <Text style={styles.eSign}>{t("Signature.consent")}</Text>
          </View>
        </View>
      </Page>

      <Page style={styles.body}>
        <Text style={styles.titleInformation}>
          PADI Discover Scuba® Diving Participant Statement
        </Text>
        <View style={styles.informationDiv}>
          <View style={styles.leftColumn}>
            <Text style={styles.informationDivText}>
              {t("InformationForm.firstName")}: {informationState?.firstName}
            </Text>
            <Text style={styles.informationDivText}>
              Email: {informationState?.email}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.address")}: {informationState?.address}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.state")}: {informationState?.state}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.country")}: {informationState?.country}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.birthdate")}: {informationState?.birthdate}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.informationDivText}>
              {t("InformationForm.lastName")}: {informationState?.lastName}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.telephone")}: {informationState?.telephone}
            </Text>
            <Text style={styles.informationDivText}>
              {t("InformationForm.city")}: {informationState?.city}
            </Text>

            <Text style={styles.informationDivText}>
              {t("InformationForm.zipcode")}: {informationState?.zipcode}
            </Text>
          </View>
        </View>
        <Text style={styles.titleInformation}>{t("NonDisclosure.title")}</Text>
        <Text style={styles.nonDisclosure}>
          {t("NonDisclosure.part1")}{" "}
          <Text style={{ fontFamily: "Times-Italic" }}>{diveCenter}</Text>{" "}
          {t("NonDisclosure.part2")}{" "}
          <Text style={{ fontFamily: "Times-Italic" }}>{diveCenter}</Text>{" "}
          {t("NonDisclosure.part3")}
        </Text>

        <Text style={styles.titleInformation}>{t("MedicalForm.title")}</Text>
        <View style={styles.medicalDiv}>
          <View style={styles.leftColumnMedical}>
            <Text style={styles.medicalDivText}>
              {t(
                "I have had problems with my lungs, breathing, heart and/or blood affecting my normal physical or mental performance.",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t("I am over 45 years of age.")}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I struggle to perform moderate exercise (for example, walk 1.6 kilometer/one mile in 14 minutes or swim 200 meters/yards without resting), OR I have been unable to participate in a normal physical activity due to fitness or health reasons within the past 12 months.**",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I have had problems with my eyes, ears, or nasal passages/sinuses.",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I have had surgery within the last 12 months, OR I have ongoing problems related to past surgery.**",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I have lost consciousness, had migraine headaches, seizures, stroke, significant head injury, or suffer from persistent neurologic injury or disease.",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I am currently undergoing treatment (or have required treatment within the last five years) for psychological problems, personality disorder, panic attacks, or an addiction to drugs or alcohol; or, I have been diagnosed with a learning or developmental disability.",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t("I have had back problems, hernia, ulcers, or diabetes.")}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I have had stomach or intestine problems, including recent diarrhea.",
              )}
            </Text>
            <Text style={styles.medicalDivText}>
              {t(
                "I am taking prescription medications (with the exception of birth control or or anti-malarial drugs other than mefloquine (Lariam).**",
              )}
            </Text>
          </View>

          <View style={styles.rightColumnMedical}>
            <Text style={styles.medicalDivText}>
              {medicalState?.lung || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.age || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.exercise || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.ENT || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.surgery || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.neurologic || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.psychological || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.backProblems || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.stomach || "No"}
            </Text>
            <Text style={styles.medicalDivText}>
              {medicalState?.drugs || "No"}
            </Text>
          </View>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.title}>
          Diver Medical | Participant Questionnaire Continued
        </Text>
        {medicalState?.lung == "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t(
                    "I have had problems with my lungs, breathing, heart and/or blood affecting my normal physical or mental performance.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Chest surgery, heart surgery, heart valve surgery, an implantable medical device (eg, stent, pacemaker, neurostimulator), pneumothorax, and/or chronic lung disease.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Asthma, wheezing, severe allergies, hay fever or congested airways within the last 12 months that limits my physical activity/exercise.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "A problem or illness involving my heart such as: angina, chest pain on exertion, heart failure, immersion pulmonary edema, heart attack or stroke, OR am taking medication for any heart condition.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Recurrent bronchitis and currently coughing within the past 12 months, OR have been diagnosed with emphysema.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Symptoms affecting my lungs, breathing, heart and/or blood in the last 30 days that impair my physical or mental performance.",
                  )}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.lung || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.heartSurgey || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.Asthma || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.heartAttack || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.bronchitis || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.DayBreathing || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        {medicalState?.age === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t("I am over 45 years of age.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("I currently smoke or inhale nicotine by other means.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("I have a high cholesterol level.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("I have high blood pressure.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "I have had a close blood relative die suddenly or of cardiac disease or stroke before the age of 50, OR have a family history of heart disease before age 50 (including abnormal heart rhythms, coronary artery disease or cardiomyopathy).",
                  )}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.age || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.Smoker || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.cholesterol || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.bloodPressure || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.relativeBefore50 || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}

        {medicalState?.ENT === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t(
                    "I have had problems with my eyes, ears, or nasal passages/sinuses.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Sinus surgery within the last 6 months.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Ear disease or ear surgery, hearing loss, or problems with balance.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Recurrent sinusitis within the past 12 months.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Eye surgery within the past 3 months.")}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.ENT || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.sinusSurgery || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.balance || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.sinusitis || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.eyeSurgery || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}

        {medicalState?.neurologic === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t(
                    "I have lost consciousness, had migraine headaches, seizures, stroke, significant head injury, or suffer from persistent neurologic injury or disease.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Head injury with loss of consciousness within the past 5 years.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Persistent neurologic injury or disease.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Recurring migraine headaches within the past 12 months, or take medications to prevent them.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Blackouts or fainting (full/partial loss of consciousness) within the last 5 years.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Epilepsy, seizures, or convulsions, OR take medications to prevent them.",
                  )}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.neurologic || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.headInjury || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.neurologicInjury || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.migraine || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.blackouts || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.epilepsy || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}

        {medicalState?.psychological === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t(
                    "I am currently undergoing treatment (or have required treatment within the last five years) for psychological problems, personality disorder, panic attacks, or an addiction to drugs or alcohol; or, I have been diagnosed with a learning or developmental disability.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Behavioral health, mental or psychological problems requiring medical/psychiatric treatment",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Major depression, suicidal ideation, panic attacks, uncontrolled bipolar disorder requiring medication/psychiatric treatment.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Been diagnosed with a mental health condition or a learning/developmental disorder that requires ongoing care or special accommodation.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "An addiction to drugs or alcohol requiring treatment within the last 5 years.",
                  )}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.psychological || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.behavioral || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.depression || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.specialAccommodation || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.addiction || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}

        {medicalState?.backProblems === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t("I have had back problems, hernia, ulcers, or diabetes.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Recurrent back problems in the last 6 months that limit my everyday activity.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Back or spinal surgery within the last 12 months.")}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Diabetes, either drug or diet controlled, OR gestational diabetes within the last 12 months",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "An uncorrected hernia that limits my physical abilities.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Active or untreated ulcers, problem wounds, or ulcer surgery within the last 6 months.",
                  )}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.backProblems || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.recurrent || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.backSurgery || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.diabetes || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.hernia || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.ulcers || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        {medicalState?.stomach === "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {t(
                    "I have had stomach or intestine problems, including recent diarrhea.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Ostomy surgery and do not have medical clearance to swim or engage in physical activity.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Dehydration requiring medical intervention within the last 7 days.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Active or untreated stomach or intestinal ulcers or ulcer surgery within the last 6 months.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Frequent heartburn, regurgitation, or gastroesophageal reflux disease (GERD).",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t(
                    "Active or uncontrolled ulcerative colitis or Crohn's disease.",
                  )}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  {t("Bariatric surgery within the last 12 months..")}
                </Text>
              </View>
              <View style={styles.rightColumnMedical}>
                <Text style={styles.medicalDivText}>
                  {medicalState?.stomach || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.ostomySurgery || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.dehydration || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.activeUlcers || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.heartburn || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.crohn || "No"}
                </Text>
                <Text style={styles.medicalDivText}>
                  {medicalState?.bariatric || "No"}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </Page>
    </Document>
  )
}

export default PDFFileDSD
