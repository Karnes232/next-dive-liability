export const formValidation = informationState => {
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
    informationState.birthdate === undefined ||
    informationState.birthdate.trim() === ""
  ) {
    return true
  }
  if (
    informationState.city === undefined ||
    informationState.city.trim() === ""
  ) {
    return true
  }
  if (
    informationState.country === undefined ||
    informationState.country.trim() === ""
  ) {
    return true
  }
  if (
    informationState.email === undefined ||
    informationState.email.trim() === ""
  ) {
    return true
  }
  if (
    informationState.firstName.trim() != "" &&
    informationState.lastName.trim() != "" &&
    informationState.birthdate.trim() != "" &&
    informationState.city.trim() != "" &&
    informationState.city.trim() != "" &&
    informationState.email.trim() != ""
  ) {
    return false
  }
}
