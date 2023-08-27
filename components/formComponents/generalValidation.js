export const generalValidation = informationState => {
  if (
    informationState.firstName === undefined ||
    informationState.firstName.trim() === ""
  ) {
    return true
  }
  if (
    informationState.lastName === undefined ||
    informationState.lastName.trim() === ""
  ) {
    return true
  }
  if (
    informationState.firstName.trim() != "" &&
    informationState.lastName.trim() != ""
  ) {
    return false
  }
}
