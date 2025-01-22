import { describe, it, expect } from "vitest";
import { getOccurencesObject } from "../arrays.mjs";

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