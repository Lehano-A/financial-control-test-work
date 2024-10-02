function getDependences(dependences: any) {
  if (Array.isArray(dependences)) {
    // если передаётся массив зависимостей
    return dependences;
  }

  if (dependences) {
    // если передаётся одна зависимость
    return [dependences];
  }

  return [null]; // если нет зависимостей
}

export default getDependences;
