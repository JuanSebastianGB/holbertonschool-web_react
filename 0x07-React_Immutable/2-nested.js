import getImmutableObject from './1-map.js';

export default function accessImmutableObject(object, array) {
  return getImmutableObject(object).getIn(array);
}
