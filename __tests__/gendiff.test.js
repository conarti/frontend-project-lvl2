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

test('genDiff', () => {
	const filepath1 = './__fixtures__/file1.json';
	const filepath2 = './__fixtures__/file2.json';

	expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
	expect(genDiff(filepath1, filepath2, 'json')).toEqual(jsonResult);
	expect(() => genDiff(filepath1, filepath2, 'unsupported-format')).toThrow();
});
