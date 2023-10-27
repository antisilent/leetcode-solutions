/**
 * @param {Object} obj
 * @return {Object}
 */
export default function compactObject(obj) {
  if (obj) {
    if (Array.isArray(obj)) {
      obj = obj.filter(o => !!o).map(o => typeof o === 'object' ? compactObject(o) : o);
    } else {
      Object.entries(obj).forEach(([key, value]) => {
        if (!value) {
          delete obj[key];
        } else {
          if (typeof value === 'object') {
            obj[key] = compactObject(value);
          }
        }
      });
    }
  }

  return obj;
};
