export const certInfoValidation = certifiedState => {
  if (
    certifiedState.lastDive === undefined ||
    certifiedState.lastDive.trim() === ""
  ) {
    return true
  }
  if (
    certifiedState.depDate === undefined ||
    certifiedState.depDate.trim() === ""
  ) {
    return true
  }
  if (
    certifiedState.totalDives === undefined ||
    certifiedState.totalDives.trim() === ""
  ) {
    return true
  }
  if (certifiedState.certImage === undefined) {
    return true
  }
  if (
    certifiedState.lastDive.trim() != "" &&
    certifiedState.depDate.trim() != "" &&
    certifiedState.totalDives.trim() != "" &&
    certifiedState.certImage != ""
  ) {
    return false
  }
}
