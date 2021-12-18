const format = (diff) => {
	const makeIndent = (depth) => '  '.repeat(depth);

	const formattedDiffs = diff.flatMap((item) => {
		const type = item.type;
		const property = item.property;
		const value = item.value;

		switch (type) {
			case 'removed':
				return `${makeIndent(1)}- ${property}: ${value}`;
			case 'added':
				return `${makeIndent(1)}+ ${property}: ${value}`;
			case 'changed':
				const oldValue = item.oldValue;
				return [
					`${makeIndent(1)}- ${property}: ${oldValue}`,
					`${makeIndent(1)}+ ${property}: ${value}`,
				];
			case 'equal':
				return `${makeIndent(2)}${property}: ${value}`;
			default:
				throw new Error(`Unknown diff type - ${type}`);
		}
	});

	const result = ['{', ...formattedDiffs, '}'];

	return result.join('\n');
};

export default format;
