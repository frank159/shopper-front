export const goToHomePage = (history) => {
    history.push("/")
}
export const goToHistoricoPedidos = (history) => {
    history.push(`/historico`)
}
export const goToPreviousPage = (history) => {
    history.goBack();
  };