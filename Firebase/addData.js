import { getFirestore, doc, setDoc } from "firebase/firestore"
import firebase_app, { db } from "./config"

export default async function addData(colllection, id, data, handleReroute) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    })
    await handleReroute()
  } catch (e) {
    error = e
    console.log(error)
  }

  return { result, error }
}
