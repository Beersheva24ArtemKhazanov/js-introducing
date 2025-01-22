import { describe, it, expect, test } from "vitest";
import { getOccurencesObject, profGetOccurencesObject } from "../objects.mjs";

describe("getOccurences test cases", () => {
    it("regular test", () => {
        let expectedObj = {
            "a" : 2,
            "b" : 2,
            "c" : 1
        };
        expect(getOccurencesObject("abcab")).toEqual(expectedObj);
    })
    it("many string test", () => {
        let expectedObj = {
            "a" : 4,
            "b" : 2,
            "c" : 3,
            "3" : 1,
            "2" : 1,
            "1" : 1,
            "5" : 1,
            "6" : 1,
            "d" : 2,
            "8" : 1
        };
        expect(getOccurencesObject("abc321cab56acdad8")).toEqual(expectedObj);
    })
    it("string is numbers", () => {
        let expectedObj = {
            "2" : 1,
            "5" : 2,
            "6" : 2,
            "7" : 1
        };
        expect(getOccurencesObject(256756)).toEqual(expectedObj);
    })
    it("string has spaces", () => {
        let expectedObj = {
            "a" : 4,
            "b" : 2,
            "c" : 3,
            "3" : 1,
            "2" : 1,
            " " : 3,
            "1" : 1,
            "5" : 1,
            "6" : 1,
            "d" : 2,
            "8" : 1
        };
        expect(getOccurencesObject("abc32 1cab56a cda d8")).toEqual(expectedObj);
    })
    it("string is null", () => {
        expect(getOccurencesObject(null)).toEqual("Can't get occurences");
    })
    it("string is undefiend", () => {
        expect(getOccurencesObject()).toEqual("Can't get occurences");
    })
})

test("profGetOccurencesObject with destructuring", () => {
    const str = "aaabgbgc";
    let {a, b, g, c} = profGetOccurencesObject(str);
    expect(a).toBe(3);
    expect(b).toBe(2);
    expect(g).toBe(2);
    expect(c).toBe(1);
})

test("string of digits, spaces and hyphens", () => {
    const str = "1,d*     ";
    const res = profGetOccurencesObject(str);
    expect(res.d).toBe(1);
    expect(res[1]).toBe(1);
    expect(res[',']).toBe(1);
    expect(res['*']).toBe(1);
    expect(res[' ']).toBe(5);
})
test("test for object as key inside another object", () => {
    const x = {x:5};
    const y = {y:10};
    const obj1 = {};
    obj1[x] = 200;
    const obj2 = obj1;
    obj2[y] = 300;
    expect(obj2[x]).toBe(300);
    expect(obj1["[object Object]"]).toBe(300);
    expect(obj1[{z:100}]).toBe(300);
})