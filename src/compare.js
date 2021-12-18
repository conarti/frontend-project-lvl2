import _ from 'lodash';

const compare = (oldData, data) => {
	const allKeys = _.union(_.keys(oldData), _.keys(data));

	const diff = allKeys.map((key) => {
		if (!_.has(data, key)) {
			return { property: key, type: 'removed', value: oldData[key] };
		}

		if (!_.has(oldData, key)) {
			return { property: key, type: 'added', value: data[key] };
		}

		if (oldData[key] !== data[key]) {
			return {
				property: key,
				type: 'changed',
				value: data[key],
				oldValue: oldData[key],
			};
		}

		return { property: key, type: 'equal', value: data[key] };
	});

	const sortedDiff = _.sortBy(diff, 'property');

	return sortedDiff;
};

export default compare;
