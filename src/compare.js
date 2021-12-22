import _ from 'lodash';

const compare = (oldData, data) => {
  const allKeys = _.union(_.keys(oldData), _.keys(data));
  const sortedKeys = _.sortBy(allKeys);

  const diff = sortedKeys.map((name) => {
    const oldValue = _.get(oldData, name);
    const newValue = _.get(data, name);

    if (!_.has(oldData, name) && _.has(data, name)) {
      return { name, type: 'added', newValue };
    }

    if (_.has(oldData, name) && !_.has(data, name)) {
      return { name, type: 'deleted', oldValue };
    }

    if (_.isPlainObject(oldValue) && _.isPlainObject(newValue)) {
      return { name, type: 'nested', children: compare(oldValue, newValue) };
    }

    if (!_.isEqual(oldValue, newValue)) {
      return {
        name, type: 'changed', newValue, oldValue,
      };
    }

    return { name, type: 'unchanged', oldValue };
  });

  return diff;
};

export default compare;
