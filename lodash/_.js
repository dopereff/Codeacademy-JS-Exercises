const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      [start, end] = [end, start];
    }
    const isInRage = !(number < start || number >= end);
    return isInRage;
  },
  words(str) {
    const words = str.split(" ");
    return words;
  },
  pad(str, padding) {
    if (padding <= str.length) {
      return str;
    }
    const padBegin = Math.floor((padding - str.length) / 2);
    const padEnd = padding - str.length - padBegin;
    const paddedStr = " ".repeat(padBegin) + str + " ".repeat(padEnd);
    return paddedStr;
  },
  has(obj, key) {
    const hasValue = obj[key] != undefined;
    return hasValue;
  },
  invert(obj) {
    const invertedObj = {};
    for (const property in obj) {
      let newKey = obj[property];
      let newValue = property;
      invertedObj[newKey] = newValue;
    }
    return invertedObj;
  },
  findKey(obj, predicate) {
    for (const key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
      return undefined;
    }
  },
  drop(arr, num) {
    if (num === undefined) {
      num = 1;
    }
    const dropArr = arr.slice(num);
    return dropArr;
  },
  dropWhile(arr, predicate) {
    const dropIndex = arr.findIndex((element, index) => !predicate(element, index, arr));
    const droppedArr = this.drop(arr, dropIndex);
    return droppedArr;
  },
  chunk(arr, size) {
    if (size === undefined) {
      size = 1
    };
    
  }
};

// Do not write or modify code below this line.
module.exports = _;
