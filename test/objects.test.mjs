import {describe, it, expect} from 'vitest';

describe("object iterating", () => {
    const person = {name: "Vasya", age: 25};
    it("for-in iterating", () => {
        const keys = ["name", "age"];
        const actual = [];
        let index = 0;
        for (let key in person) {
            actual[index++] = key;
        }
        expect(actual).toEqual(keys);
    })
    it("keys iterating using for...of", () => {
        const keys = ["name", "age"];
        const actual = [];
        let index = 0;
        for (let key of Object.keys(person)) {
            actual[index++] = key;
        }
        expect(actual).toEqual(keys);
    })

    it("values iterating using for...of", () => {
        const expectedValues = ["Vasya", 25];
        const actualValues = [];
        let index = 0;
        for(let value of Object.values(person)) {
            actualValues[index++] = value;
        }
        expect(actualValues).toEqual(expectedValues);
    });
    it ("iterating entries using for...of", () => {
        const expectedEntries = [["name", "Vasya"], ["age", 25]];
        const actualEntries = [];
        let index = 0;
        for (let entry of Object.entries(person)) {
            actualEntries[index++] = entry;
        }
        expect(actualEntries).toEqual(expectedEntries);
    })
})