import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

const stylishResult = readFile('stylish.txt');
const jsonResult = readFile('json.txt');
const plainResult = readFile('plain.txt');

test('should works with json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(jsonResult);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult);
  expect(() => genDiff(filepath1, filepath2, 'unsupported-format')).toThrow();
});

test('should works with yml', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
});
