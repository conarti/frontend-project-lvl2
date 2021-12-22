import getDataFromFile from './utils.js';
import compare from './compare.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatter = 'stylish') => {
  const dataForCompare = getDataFromFile(filepath1);
  const data = getDataFromFile(filepath2);

  const diff = compare(dataForCompare, data);

  return format(diff, formatter);
};

export default genDiff;
