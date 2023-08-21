export const medicalValidation = medicalState => {
  if (medicalState.lung === undefined || medicalState.lung.trim() === "") {
    return true
  }
  if (medicalState.age === undefined || medicalState.age.trim() === "") {
    return true
  }
  if (
    medicalState.exercise === undefined ||
    medicalState.exercise.trim() === ""
  ) {
    return true
  }
  if (medicalState.ENT === undefined || medicalState.ENT.trim() === "") {
    return true
  }
  if (
    medicalState.surgery === undefined ||
    medicalState.surgery.trim() === ""
  ) {
    return true
  }
  if (
    medicalState.neurologic === undefined ||
    medicalState.neurologic.trim() === ""
  ) {
    return true
  }
  if (
    medicalState.psychological === undefined ||
    medicalState.psychological.trim() === ""
  ) {
    return true
  }
  if (
    medicalState.backProblems === undefined ||
    medicalState.backProblems.trim() === ""
  ) {
    return true
  }
  if (
    medicalState.stomach === undefined ||
    medicalState.stomach.trim() === ""
  ) {
    return true
  }
  if (medicalState.drugs === undefined || medicalState.drugs.trim() === "") {
    return true
  }
  if (
    medicalState.age.trim() != "" &&
    medicalState.exercise.trim() != "" &&
    medicalState.ENT.trim() != "" &&
    medicalState.surgery.trim() != "" &&
    medicalState.neurologic.trim() != "" &&
    medicalState.psychological.trim() != "" &&
    medicalState.backProblems.trim() != "" &&
    medicalState.stomach.trim() != "" &&
    medicalState.drugs.trim() != ""
  ) {
    return false
  }
}
