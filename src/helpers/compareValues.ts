function compareValues(
  a: string | number | bigint,
  b: string | number | bigint,
) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
}

export default compareValues;
