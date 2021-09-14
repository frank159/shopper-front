export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPreviousPage = (history) => {
    history.goBack();
  };