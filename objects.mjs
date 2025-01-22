let name = 'Vasya';
let age = 25;
const person = { name: 'Petya', age: 40 };
person.gender = "male";
delete person.age;
let key = "gender";
let field = person[key];
key = "age";
person[key] = 20;
({ name, age } = person);
let { gender } = person;


export function getOccurencesObject(string) {
    let res = {};
    let isValid = false;
    if ( string != undefined || string != null) {
        string = string.toString();
        for (let char of string) {
            res[char] = res[char] === undefined ? 1 : res[char] + 1;
        }
        isValid = true;
    }
    return isValid ? res: "Can't get occurences";
}

export function profGetOccurencesObject(string) {
    const res = {};
    if ( string != undefined || string != null) {
        string = string.toString();
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if(!res[char]) {
                res[char] = 0;
            }
            res[char]++;
        }
    }
    return res;
}