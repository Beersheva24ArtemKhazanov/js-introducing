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
