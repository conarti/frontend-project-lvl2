import formatJson from './json.js';
import formatStylish from './stylish.js';

const format = (diff, formatter) => {
	switch (formatter) {
		case 'json':
			return formatJson(diff);
		case 'stylish':
			return formatStylish(diff);
		default:
			throw new Error(`format: Unsupported output format - ${formatter}`);
	}
};

export default format;
