//numbers
//var
//let
//const
let a = 10;
a = 10 / 3;
a = Math.trunc(a);
a **= 3;
const str = '12.35';
a = parseFloat(str);

function parseInt(str) {
  return Math.trunc(parseFloat(str));
}

function square(a) {
  return a ** 2;
}

str[1] = "*";
for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

function MyParseInt(str) {
  if (typeof str !== 'string') {
    return NaN;
  }
  str = str.trim();
  const sign = str[0] === '-' ? -1 : 1;
  const start = str[0] === '-' || str[0] === '+' ? 1 : 0;
  let result = 0;
  for(let i = start; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      break;
    }
    result = result * 10 + (str[i] - '0');
  }

  return result * sign;
}

console.log(MyParseInt('  -42'));
console.log(MyParseInt('+23'));
console.log(MyParseInt('23abc'));
console.log(MyParseInt('abc15'));
console.log(MyParseInt('abc'));
console.log(MyParseInt(''));
console.log(MyParseInt(null));