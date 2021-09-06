export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokeDetalhes = (history, id) => {
    history.push(`/detalhes/${id}`)
}
export const goToPreviousPage = (history) => {
    history.goBack();
  };