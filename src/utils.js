import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import parse from './parsers/index.js';

const getDataFromFile = (path) => {
  const fullPath = resolve(path);
  const data = readFileSync(fullPath);
  const extension = extname(path);
  return parse(data, extension);
};

export default getDataFromFile;
