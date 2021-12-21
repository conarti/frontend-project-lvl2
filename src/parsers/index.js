import yaml from 'js-yaml';

const parseJson = (data) => JSON.parse(data);
const parseYml = (data) => yaml.load(data);

const parse = (buffer, extension) => {
	switch (extension) {
		case '.json':
			return parseJson(buffer);
		case '.yml':
		case '.yaml':
			return parseYml(buffer);
		default:
			throw new Error(`parse: Unsupported extension type - ${extension}`);
	}
};

export default parse;
