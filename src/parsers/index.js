const parseJson = (data) => JSON.parse(data);

const parse = (buffer, extension) => {
	switch (extension) {
		case '.json':
			return parseJson(buffer);
		default:
			throw new Error(`parse: Unsupported extension type - ${extension}`);
	}
};

export default parse;
