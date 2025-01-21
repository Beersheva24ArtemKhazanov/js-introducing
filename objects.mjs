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
    //TODO
    //return object with data about occurence for each character in the given string
    //"abcdab"
    //data should include a encountered 3 times
    //b - two times, c and d - one time
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