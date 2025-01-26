import { describe, it, expect } from "vitest";
const ar = [18, 1000, -10, 30, 60, 50];

describe("meaning of spread operator for arrays and arguments", () => {
    it("finding maximal number from array", () => {
        const numbers = [1, 2, 3, 4];
        expect(Math.max(...numbers)).toBe(4);
    })
    it("pushing one array to another", () => {
        const array1 = [1, 2];
        const array2 = [3, 4];
        const expected = [1, 2, 3, 4];
        array1.push(...array2);
        expect(array1).toEqual(expected);
    })
    it("copying arrays using spread operator", () => {
        const array1 = [1, 2];
        const array2 = [...array1];
        expect(array2).not.toBe(array1);
        expect(array2).toEqual(array1);
    })
})

describe("inserting new elements in array", () => {
    const inseredNumbers = [-10, -20];
    it("inserting at begining of array", () => {
        const ar = [1, 2];
        const expected = [-10, -20, 1, 2];
        ar.unshift(...inseredNumbers);
        expect(ar).toEqual(expected);
    })
    it("adding new numbers at end of array", () => {
        const ar = [1, 2];
        const expected = [1, 2, -10, -20];
        ar.push(...inseredNumbers);
        expect(ar).toEqual(expected);
    })
    it("inserting new number at middle of array", () => {
        const ar = [1, 2];
        const expected = [1, -10, -20, 2];
        ar.splice(1, 0, ...inseredNumbers)
        expect(ar).toEqual(expected);
    })
})

describe("removing elements from array", () => {
    it("removing first element", () => {
        const ar = [1, 2, 3, 4];
        const expected = [2, 3, 4];
        ar.shift();
        expect(ar).toEqual(expected);
    })
    it("removing last element", () => {
        const ar = [1, 2, 3, 4];
        const expected = [1, 2, 3];
        ar.pop();
        expect(ar).toEqual(expected);
    })
    it("removing elements from middleof array", () => {
        const ar = [1, 2, 3, 4];
        const expected = [1, 4];
        ar.splice(1, 2);
        expect(ar).toEqual(expected);
    })
})

describe("finding elements in array", () => {
    it("method indexOf and last IndexOf from primitives", () => {
        const ar = [1, 2, 3, 4, 2, 4];
        expect(ar.indexOf(20)).toBe(-1);
        expect(ar.indexOf(2)).toBe(1);
    })
    it("getting index of an Object inside array", () => {
        const obj1 = { x: 7 };
        const ar = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
            { x: 7 },
            obj1
        ];
        expect(ar.indexOf({ x: 4 })).toBe(-1);
        expect(ar.indexOf(obj1)).toBe(4);
        expect(ar.findIndex(obj => obj.x === 5)).toBe(1);
        expect(ar.findIndex(obj => obj.x === 20)).toBe(-1);
    })
    it("finding object in array", () => {
        const obj1 = { x: 7 };
        const ar = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
            { x: 7 },
            obj1
        ];
        expect(ar.find(obj => obj.x === 5)).toEqual({ x: 5 });
    })
    it("finding several objects/primitives matching a predicate", () => {
        const arPrimitives = [1, 2, -3, 4, 5, 6];
        const arObjects = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
            { x: 7 }
        ];
        expect(arPrimitives.filter(num => num % 2 != 0)).toEqual([1, -3, 5])
        expect(arObjects.filter(obj => obj.x % 2 === 0)).toEqual([{ x: 4 }, { x: 6 }])
    })
})

describe("iterating elements of array", () => {
    const array = [1, 2, -3, 4, 5, 6];
    it("printing out elements using for..in", () => {
        for (let i in array) {
            console.log(array[i]);
        }
    })
    it("printing out elements using for..of", () => {
        for (let num of array) {
            console.log(num);
        }
    })
    it("printing out elements using forEach", () => {
        array.forEach(e => console.log(e));
    })
    it("printing out index and elements from array", () => {
        array.forEach((e, i) => console.log(`index: ${i}; element: ${e}`));
    })
})

describe("sorting array", () => {
    it("native sorting", () => {
        const expected = [-10, 18, 30, 50, 60, 1000];
        expect(ar.toSorted((a, b) => a - b)).toEqual(expected);
    })
})
describe("array introspecting", () => {
    const ar = [18, 1000, -10, 30, 60, 50];
    const objects = [
        { x: 4 },
        { x: 5 }
    ];
    it("includes", () => {
        expect(ar.includes(1000)).toBeTruthy();
        expect(ar.includes(10000)).toBeFalsy();
        expect(ar.includes({ x: 4 })).toBeFalsy();
    })
    it("testing for array of objects", () => {
        expect(objects.find(obj => obj.x === 4)).toBeTruthy();
        expect(objects.find(obj => obj.x === 1)).toBeFalsy();
    })
    it("testing for all elements match a condition", () => {
        expect(ar.every(num => num % 2 === 0)).toBeTruthy();
        expect(ar.some(num => num % 2 !== 0)).toBeFalsy();
    })
})

describe("slice, string-split, join methods of array", () => {
    it("slice method", () => {
        const array = [1, 2, 3, 4, 5];
        const expected = [2, 3, 4];
        expect(array.slice(1,4)).toEqual(expected);
        const copyExpected = [1, 2, 3, 4, 5];
        expect(array.slice()).toEqual(copyExpected);
    })
    it("join method", () => {
        const expectedStr = "18-1000--10-30-60-50";
        expect(ar.join("-")).toBe(expectedStr);
        const arStr = expectedStr.split(/(?<=\d)-|^-/);
        expect(arStr).toEqual(ar.map(s => s.toString()));
    })
})