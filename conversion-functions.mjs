const zeroCode = "0".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
const MAX_CODE = 126;
const MIN_CODE = 32
const RANGE = MAX_CODE - MIN_CODE + 1;
export function myParseIntRadix(strNum, radix) {
  let res = NaN;
  let sign = 1;
  let actualRadix = getActualRadix(radix);
  if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
    let index = 0;
    strNum = strNum.toString();
    strNum = strNum.trim();
    strNum = strNum.toLowerCase();
    ({ sign, index } = signProcessing(strNum, index, sign));
    res = convertProcessing(index, strNum, res, radix);
  }
  return (res *= sign);
}
export function myParseInt(strNum) {
  return myParseIntRadix(strNum, 10);
}
function convertProcessing(index, strNum, res, radix) {
  if (index < strNum.length && !isNaN(getDigit(strNum[index], radix))) {
    res = 0;
    let running = true;
    while (index < strNum.length && running) {
      let digit = getDigit(strNum[index], radix);
      if (isNaN(digit)) {
        running = false;
      } else {
        res = res * radix + digit;
        index++;
      }
    }
  }
  return res;
}

function signProcessing(strNum, index, sign) {
  if (strNum[0] == "-") {
    index++;
    sign = -1;
  } else if (strNum[0] == "+") {
    index++;
  }
  return { index, sign };
}

function getDigit(digitStr, radix) {
  const code = digitStr.charCodeAt(0);
  const base = code > nineCode ? aCode - 10 : zeroCode;
  const res = code - base;
  return res > -1 && res < radix ? res : NaN;
}

function getActualRadix(radix) {
  let actualRadix = 10;
  if (radix !== undefined) {
    actualRadix = radix > 1 && radix < 37 ? radix : NaN;
  }
  return actualRadix;
}

export function myToStringFromIntNumber(num) {
  let res = "";
  let intPart = Math.trunc(num);
  let isNegative = intPart < 0;
  intPart = Math.abs(intPart);
  const digits = "0123456789";

  while (intPart > 0) {
    let digit = intPart % 10;
    res = digits[digit] + res;
    intPart = Math.floor(intPart / 10);
  }
  return isNegative ? "-" + res : res;
}

export function stringShift(str, shift) {
  return shiftUnshift(str, shift, true);
}

function getActualShift(code, shift, isShift) {
  const actualShift =  isShift ? code - MIN_CODE : MAX_CODE - code;
  return (actualShift + shift) % RANGE; 
}

function shiftUnshiftOneChar(code, shift, isShift) {
  const actualShift = getActualShift(code, shift, isShift)
  const codeRes = isShift ? MIN_CODE + actualShift : MAX_CODE - actualShift;
  return String.fromCharCode(codeRes);
}

function shiftUnshift(str, shift, isShift) {
  let res = str;
  shift = parseInt(shift);
  if (str != undefined &&  shift > 0) {
    str = str.toString();
    res = '';
    for (let i = 0; i < str.length; i++) {
      res += shiftUnshiftOneChar(str[i].charCodeAt(0), shift, isShift);
    }
  }
  return res;
}

export function stringUnshift(str, unshift) {
  return shiftUnshift(str, unshift, false);
}

