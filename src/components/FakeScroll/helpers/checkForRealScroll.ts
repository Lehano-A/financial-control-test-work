// проверить наличие реального скролла
function checkForRealScroll(valueScroll: number, valueContentBox: number) {
  return valueScroll > valueContentBox;
}

export default checkForRealScroll;
