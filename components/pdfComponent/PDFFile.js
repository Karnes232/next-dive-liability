"use client"

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

const Logo =
  "https://diving-liability.netlify.app/static/43dbec164ace49b7e4ed823c6aa09e82/1f613/Logo-Mariana-Caribbean-Sports2.webp"
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  informationDiv: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    height: 25,
    // '@media max-width: 400': {
    //   flexDirection: 'column',
    // },
  },
  medicalDiv: {
    marginTop: 5,
    flexDirection: "row",
  },
  leftColumn: {
    flexDirection: "column",
    width: 570,
    paddingTop: 5,
    paddingRight: 15,
    height: 100,
    // '@media max-width: 400': {
    //   width: '100%',
    //   paddingRight: 0,
    // },
    // '@media orientation: landscape': {
    //   width: 200,
    // },
  },
  leftColumnMedical: {
    flexDirection: "column",
    width: 400,
    paddingTop: 5,
    paddingRight: 15,
  },
  rightColumnMedical: {
    flexDirection: "column",
    width: 70,
    paddingTop: 5,
    paddingRight: 15,
  },

  rightColumn: {
    flexDirection: "column",
    width: 570,
    paddingTop: 5,
    paddingRight: 15,
    height: 100,
    // '@media max-width: 400': {
    //   width: '100%',
    //   paddingRight: 0,
    // },
    // '@media orientation: landscape': {
    //   width: 200,
    // },
  },
  informationDivText: {
    fontSize: 14,
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
  nonDisclosure: {
    fontSize: 10,
    marginVertical: 4,
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    height:10,
    width:500,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
})

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
})

const PDFFile = ({ informationState, medicalState, signature }) => {
  return (
    <Document>
      <Page style={styles.body} wrap>
      <Text style={styles.title}>
          PADI Discover Scuba® Diving Participant Statement
        </Text>
        <View style={styles.informationDiv}>
          <View style={styles.leftColumn}>
            <Text style={styles.informationDivText}>
              First Name: {informationState?.firstName || "James"}
            </Text>
            <Text style={styles.informationDivText}>
              Email: {informationState?.email || "karnes.james@gmail.com"}
            </Text>
            <Text style={styles.informationDivText}>
              Address: {informationState?.address || "Box 77"}
            </Text>
            <Text style={styles.informationDivText}>
              State: {informationState?.state || "MB"}
            </Text>
            <Text style={styles.informationDivText}>
              Country: {informationState?.country || "Canada"}
            </Text>
            <Text style={styles.informationDivText}>
              Birth Date: {informationState?.birthdate || "Feb 23 1983"}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.informationDivText}>
              Last Name: {informationState?.lastName || "Karnes"}
            </Text>
            <Text style={styles.informationDivText}>
              Phone Number: {informationState?.telephone || "19826405433"}
            </Text>
            <Text style={styles.informationDivText}>
              City: {informationState?.city || "Brandon"}
            </Text>

            <Text style={styles.informationDivText}>
              Zip Code: {informationState?.zipcode || "R7A"}
            </Text>
          </View>
          
        </View>
        <Text style={styles.title}>
          Diver Medical | Participant Questionnaire
        </Text>
        <View style={styles.medicalDiv}>
          <View style={styles.leftColumnMedical}>
            <Text style={styles.medicalDivText}>
              I have had problems with my lungs, breathing, heart and/or blood
              affecting my normal physical or mental performance.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I am over 45 years of age.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I struggle to perform moderate exercise (for example, walk 1.6
              kilometer/one mile in 14 minutes or swim 200 meters/yards without
              resting), OR I have been unable to participate in a normal
              physical activity due to fitness or health reasons within the past
              12 months.**{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I have had problems with my eyes, ears, or nasal passages/sinuses.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I have had surgery within the last 12 months, OR I have ongoing
              problems related to past surgery.**{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I have lost consciousness, had migraine headaches, seizures,
              stroke, significant head injury, or suffer from persistent
              neurologic injury or disease.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I am currently undergoing treatment (or have required treatment
              within the last five years) for psychological problems,
              personality disorder, panic attacks, or an addiction to drugs or
              alcohol; or, I have been diagnosed with a learning or
              developmental disability.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I have had back problems, hernia, ulcers, or diabetes.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I have had stomach or intestine problems, including recent
              diarrhea.{" "}
            </Text>
            <Text style={styles.medicalDivText}>
              I am taking prescription medications (with the exception of birth
              control or or anti-malarial drugs other than mefloquine
              (Lariam).**
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
        <Page style={styles.body} wrap>
        <Text style={styles.title}>
      Non-Agency Disclosure and Acknowledgment Agreement
        </Text>
      <Text  style={styles.nonDisclosure}>
          I understand and agree that PADI Members (“Members”), including Mariana Caribbean Sports and/or any individual PADI Instructors and Divemasters associated with the program in which  I am participating, are licensed to use various PADI Trademarks and to conduct PADI training,  but are not agents, employees or franchisees of PADI Americas, Inc, or its parent, subsidiary and affiliated corporations (“PADI”). I further understand that Member business activities are independent and are neither owned nor operated by PADI, and that while PADI establishes  the standards for PADI diver training programs, it is not responsible for, nor does it have the  right to control, the operation of the Members’ business activities and the day-to-day conduct  of PADI programs and supervision of divers by the Members or their associated staff. I further  understand and agree on behalf of myself, my heirs and my estate that in the event of an injury  or death during this activity, neither I nor my estate shall seek to hold PADI liable for the actions,  inactions or negligence of Mariana Caribbean Sports and/or the instructors and divemasters associated with the activity.
          </Text>
        <Text style={styles.title}>
          Diver Medical | Participant Questionnaire Continued
        </Text>
        {medicalState?.lung == "Yes" ? (
          <>
            <View style={styles.medicalDiv}>
              <View style={styles.leftColumnMedical}>
                <Text style={styles.medicalDivText}>
                  I have had problems with my lungs, breathing, heart and/or
                  blood affecting my normal physical or mental performance.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Chest surgery, heart surgery, heart valve surgery, an
                  implantable medical device (eg, stent, pacemaker,
                  neurostimulator), pneumothorax, and/or chronic lung disease.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Asthma, wheezing, severe allergies, hay fever or congested
                  airways within the last 12 months that limits my physical
                  activity/exercise.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  A problem or illness involving my heart such as: angina, chest
                  pain on exertion, heart failure, immersion pulmonary edema,
                  heart attack or stroke, OR am taking medication for any heart
                  condition.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Recurrent bronchitis and currently coughing within the past 12
                  months, OR have been diagnosed with emphysema.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Symptoms affecting my lungs, breathing, heart and/or blood in
                  the last 30 days that impair my physical or mental
                  performance.{" "}
                </Text>
                <Text style={styles.medicalDivText}>
                  I have had back problems, hernia, ulcers, or diabetes.{" "}
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
                  I am over 45 years of age.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  I currently smoke or inhale nicotine by other means.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  I have a high cholesterol level.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  I have high blood pressure.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  I have had a close blood relative die suddenly or of cardiac
                  disease or stroke before the age of 50, OR have a family
                  history of heart disease before age 50 (including abnormal
                  heart rhythms, coronary artery disease or cardiomyopathy).{" "}
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
                  I have had problems with my eyes, ears, or nasal
                  passages/sinuses.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Sinus surgery within the last 6 months.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Ear disease or ear surgery, hearing loss, or problems with
                  balance.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Recurrent sinusitis within the past 12 months.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Eye surgery within the past 3 months.{" "}
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
                  I have lost consciousness, had migraine headaches, seizures,
                  stroke, significant head injury, or suffer from persistent
                  neurologic injury or disease.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Head injury with loss of consciousness within the past 5
                  years.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Persistent neurologic injury or disease.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Recurring migraine headaches within the past 12 months, or
                  take medications to prevent them.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Blackouts or fainting (full/partial loss of consciousness)
                  within the last 5 years.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Epilepsy, seizures, or convulsions, OR take medications to
                  prevent them.{" "}
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
                  I am currently undergoing treatment (or have required
                  treatment within the last five years) for psychological
                  problems, personality disorder, panic attacks, or an addiction
                  to drugs or alcohol; or, I have been diagnosed with a learning
                  or developmental disability.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Behavioral health, mental or psychological problems requiring
                  medical/psychiatric treatment{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Major depression, suicidal ideation, panic attacks,
                  uncontrolled bipolar disorder requiring medication/psychiatric
                  treatment.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Been diagnosed with a mental health condition or a
                  learning/developmental disorder that requires ongoing care or
                  special accommodation
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  An addiction to drugs or alcohol requiring treatment within
                  the last 5 years.{" "}
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
                  I have had back problems, hernia, ulcers, or diabetes.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Recurrent back problems in the last 6 months that limit my
                  everyday activity.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Back or spinal surgery within the last 12 months.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Diabetes, either drug or diet controlled, OR gestational
                  diabetes within the last 12 months
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  An uncorrected hernia that limits my physical abilities.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Active or untreated ulcers, problem wounds, or ulcer surgery
                  within the last 6 months.{" "}
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
                  I have had stomach or intestine problems, including recent
                  diarrhea.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Ostomy surgery and do not have medical clearance to swim or
                  engage in physical activity.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Dehydration requiring medical intervention within the last 7
                  days.{" "}
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Active or untreated stomach or intestinal ulcers or ulcer
                  surgery within the last 6 months.
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Frequent heartburn, regurgitation, or gastroesophageal reflux
                  disease (GERD).
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Active or uncontrolled ulcerative colitis or Crohn's disease.
                </Text>
                <Text style={styles.medicalDivTextSecondary}>
                  Bariatric surgery within the last 12 months.
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
      <Page style={styles.body} wrap>
      
          <Text style={styles.title}>
          Liability Release and Assumption of Risk Agreement
        </Text>
        <Text  style={styles.nonDisclosure}>
        I, {informationState?.firstName} {informationState?.lastName}, hereby affirm that I aware that skin and scuba diving have inherent risks which may result in serious injury or death.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I understand that diving with compressed air involves certain inherent risks; decompression sickness, embolism or other hyperbaric injuries can occur that require treatment in a recompression chamber. I further understand that this program may be conducted at a site that is remote either by time or distance or both, from such a recompression chamber. I still choose to proceed with this program in spite of the absence of a recompression chamber or medical facility in proximity to the dive site.
          </Text>
          <Text  style={styles.nonDisclosure}>
          The information I have provided about my medical history on the Medical Questionnaire is accurate to the best of my knowledge. I agree to accept responsibility for omissions regarding my failure to disclose any existing or past health conditions.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I understand and agree that neither the dive professionals conducting this program, nor the facility through which this program is offered,Mariana Caribbean Sports, nor PADI Americas, Inc., nor its affiliate or subsidiary corporations, nor any of their respective employees officers, agents or assigns (hereinafter referred to as “Released Parties”) may be held liable or responsible in any way for any injury, death or other damages to me, my family, estate, heirs or assigns that may occur as a result of my participation in this program or as a result of the negligence of the Released Parties, whether passive or active.
          </Text>
          <Text  style={styles.nonDisclosure}>
          In consideration of being allowed to participate in this program, I hereby personally assume all risks for any harm, injury or damage, whether foreseen or unforeseen, that may befall me while participating in this program, including but not limited to the knowledge development confined water and/or open water activities.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I further release and hold harmless the Discover Scuba Diving program and the Released Parties from any claim or lawsuit by me, my family, estate, heirs or assigns, arising out of my participation in this program.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I further understand that skin diving and scuba diving are physically strenuous activities and that I will be exerting myself during this program and that if I am injured as result of heart attack, panic, hyperventilation, etc., that I expressly assume the risk of said injuries and that I will not hold the Released Parties responsible for the same.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I further state that I am of lawful age and legally competent to sign this Liability Release and Assumption of Risk Agreement, or that I have acquired the written consent of my parent or guardian.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I understand that the terms herein are contractual and not a mere recital and that I have signed this Agreement of my own free act and with the knowledge that I hereby agree to waive my legal rights. I further agree that if any provision of this Agreement is found to be unenforceable or invalid, that provision shall be severed from this Agreement. The remainder of this Agreement will then be construed as though the unenforceable provision had never been contained herein.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I understand and agree that I am not only giving up my right to sue the Released Parties but also any rights my heirs, assigns or beneficiaries may have to sue the Released Parties resulting from my death. I further represent that I have the authority to do so and that my heirs, assigns and beneficiaries will be estopped from claiming otherwise because of my representations to the Released Parties.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I, {informationState?.firstName} {informationState?.lastName}, BY THIS INSTRUMENT DO EXEMPT AND RELEASE THE DIVE PROFESSIONALS CONDUCTING THIS PROGRAM, THE FACILITY THROUGH WHICH THE PROGRAM IS CONDUCTED, AND PADI AMERICAS, INC., AND ALL RELATED ENTITIES AND RELEASED PARTIES AS DEFINED ABOVE FROM ALL LIABILITY OR RESPONSIBILITY WHATSOEVER FOR PERSONAL INJURY, PROPERTY DAMAGE OR WRONGFUL DEATH, HOWEVER CAUSED, INCLUDING BUT NOT LIMITED TO THE NEGLIGENCE OF THE RELEASED PARTIES, WHETHER PASSIVE OR ACTIVE.
          </Text>
          <Text  style={styles.nonDisclosure}>
          I HAVE FULLY INFORMED MYSELF OF THE CONTENTS OF THIS LIABILITY RELEASE AND ASSUMPTION OF RISK AGREEMENT AND NON-AGENCY DISCLOSURE ACKNOWLEDGMENT AGREEMENT BY READING BOTH BEFORE SIGNING BELOW ON BEHALF OF MYSELF AND MY HEIRS AND AFFIRM THE MEDICAL QUESTIONNAIRE IS ACCURATE.
          </Text>
          <Image
          src={signature}
          alt='Signature'
          style={styles.image}
           />
           
      </Page>
    </Document>
  )
}

export default PDFFile
