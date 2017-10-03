export const isArray = arr => arr instanceof Array;
export const getValueFromReactEvent = (fn) => ({ target: { value }}) => fn(value);
