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
import { diveCenter } from "@/data/diveCenter"
import { useTranslation } from "react-i18next"
const Logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3RBSAGqbRR4eElPgR9lCJeTJvNrcLIg2_k5ffn5S5g&s"

const styles = StyleSheet.create({
  page: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleContainer: {
    flexGrow: 9,
    maxWidth: 260,
    fontFamily: "Helvetica-Bold",
  },
  headerTitle: {},
  headerImageContainer: {
    maxWidth: 120,
  },
  image: {},
  generalLiability: {
    fontSize: 10,
    marginVertical: 2,
  },
  italic: {
    fontFamily: "Times-Italic",
  },
  signatureDiv: {
    flexDirection: "column",
    width: 400,
    paddingTop: 5,
    paddingRight: 15,
  },
  signature: {
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
})

const PDFFileGeneral = ({ informationState, signature }) => {
  const { t } = useTranslation()
  let today = new Date().toLocaleDateString()

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              {t("StandardLiabilityRelease.title")}
            </Text>
          </View>
          <View style={styles.headerImageContainer}>
            <Image src={Logo} style={styles.image} alt="Logo" />
          </View>
        </View>
        <View style={styles.generalLiability}>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.I")},{" "}
            <Text style={styles.italic}>
              {informationState?.firstName} {informationState?.lastName}
            </Text>
            , {t("StandardLiabilityRelease.liabilityRelease1")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease2")}{" "}
            <Text style={styles.italic}>{diveCenter}</Text>{" "}
            {t("StandardLiabilityRelease.liabilityRelease3")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease4")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease5")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease6")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease7")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease8")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease9")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease10")}
          </Text>
          <Text style={styles.generalLiability}>
            {t("StandardLiabilityRelease.liabilityRelease11")}{" "}
            <Text style={styles.italic}>{diveCenter}</Text>{" "}
            {t("StandardLiabilityRelease.liabilityRelease12")}{" "}
            <Text style={styles.italic}>{diveCenter}</Text>{" "}
            {t("StandardLiabilityRelease.liabilityRelease13")}{" "}
            <Text style={styles.italic}>{diveCenter}</Text>{" "}
            {t("StandardLiabilityRelease.liabilityRelease14")}
          </Text>
        </View>
        <View style={styles.signatureDiv}>
          <Image
            src={signature}
            source={signature}
            alt="Signature"
            style={styles.signature}
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
          </View>{" "}
        </View>
      </Page>
    </Document>
  )
}

export default PDFFileGeneral
