const toCamelCasedKey = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const newKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    newObj[newKey] = obj[key];
  });
  return newObj;
};

const unique = (res, current) => {
  const arr = [...current, ...Object.entries(res)
    // removing items with ids available on current_state_array from response
    .filter(([key]) => !current.map((item) => item.item_id).includes(key))
    // reshaping the array and objects according to design scheme
    .map(([key, [value]]) => ({ item_id: key, ...value }))];
  return arr;
};

export { toCamelCasedKey, unique };
