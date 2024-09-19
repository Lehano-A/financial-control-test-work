const digitRegex = new RegExp(/[0-9]/g);

function getNumFromString(value: string) {
  return Number(value.match(digitRegex)?.join(''));
}

export default getNumFromString;
