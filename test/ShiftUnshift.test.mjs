import { describe, it, expect } from "vitest";
import { stringShift, stringUnshift } from "../conversion-functions.mjs";

describe("shift - unshift test cases", () => {
    it("big shifting and unshifting test for undefiend", () => {
        let source = "null";
        const shift = 100_000_000;
        const shiftedSource = stringShift(source, shift);
        const unshiftedSource = stringUnshift(shiftedSource, shift);
        expect(unshiftedSource).toBe(source);
    })
    it("shift is a string containing number", () => {
        expect(stringShift(123, "1")).toBe("234")
    })
    it("alternative flow for shift that is not a number", () => {
        expect(stringShift("123", "ab")).toBe("123");
        expect(stringShift("123", NaN)).toBe("123");
        expect(stringShift("123",)).toBe("123")
    })
    it("shifting number", () => {
        expect(parseInt(stringShift(123,1))).toBe(234)
    }) 
    it("shifting undefined", () => {
        expect(stringShift(undefined, 1)).toBeUndefined()
    }) 
    it("shift null", () => {
        expect(stringShift(null, 1)).toBeNull()
    })
    it("alternative flow for shift negative", () => {
        expect(stringShift("123", -4)).toBe("123")
    })
    it("regular check", () => {
        expect(stringShift("Hello", 3)).toBe("Khoor");
    })
    it(" str is ~Z4 ", () => {
        expect(stringShift("~Z4", 3)).toBe('"]7')
    })
    it(" str is a ", () => {
        expect(stringShift("a", 3)).toBe('d')
    })
    it(" str is 9 ", () => {
        expect(stringShift("9", 2)).toBe(';')
    })
    it("regular check", () => {
        expect(stringUnshift("Khoor", 3)).toBe("Hello");
    })
    it(" str is ~Z4 ", () => {
        expect(stringUnshift('"]7', 3)).toBe('~Z4')
    })
    it(" str is d ", () => {
        expect(stringUnshift("d", 3)).toBe('a')
    })
    it(" str is ; ", () => {
        expect(stringUnshift(";", 2)).toBe('9')
    })
})
