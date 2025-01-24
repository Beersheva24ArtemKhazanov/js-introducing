import { describe, it, expect } from "vitest";

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
        const expected = [ 1, 2,-10, -20];
        ar.push(...inseredNumbers);
        expect(ar).toEqual(expected);
    })
    it("inserting new number at middle of array", () => {
        const ar = [1, 2];
        const expected = [ 1, -10, -20, 2];
        ar.splice(1,0,...inseredNumbers)
        expect(ar).toEqual(expected);
    })
})