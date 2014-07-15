function getTypedValue(s, type, defType) {
  if (!s || typeof s !== 'object') {
    return s;
  } else if (!type && !defType) {
    return null;
  } else {
    return (type && s[type]) || (defType && s[defType]) || null;
  }
}
function setTypedValue(s, v, type, defType) {
  if (!type || typeof v === 'object') {
    return v;
  } else {
    if (typeof s !== 'object' || !s) {
      if (defType && s) {
        var _s = {};
        _s[defType] = s;
        s = _s;
      } else {
        s = {};
      }
    }
    s[type] = v;
    return s;
  }
}

module.exports.accessor = function(object, property, defType) {
  if (!object || !property) throw new Error('bad arguments');
  object['set' + property.substr(0, 1).toUpperCase() + property.substr(1)] = function(s, type) {
    this[property] = setTypedValue(this[property], s, type, defType);
  }
  object['get' + property.substr(0, 1).toUpperCase() + property.substr(1)] = function(type) {
    return getTypedValue(this[property], type, defType);
  }
}
