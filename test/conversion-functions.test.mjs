import { describe, it, expect } from "vitest";
import { myToStringFromIntNumber, profParseInt } from "../conversion-functions.mjs";

//Unit test is AAA - Arranging, Act and Assert
describe("profParseInt test cases", () => {
    it("regular string with positive integer number", () => {
        const str = "123";
        const res = profParseInt(str) + 2;
        expect(res).toBe(125);
    });

    it("regular string with negative integer number", () => {
        expect(profParseInt("-123") + 2).toBeNaN();
    });

    it(" string with number following +", () => {
        expect(profParseInt("+123")).toBeNaN();
    });

    it("undefiend", () => {
        expect(profParseInt()).toBeNaN();
    });

    it("null", () => {
        expect(profParseInt(null)).toBeNaN();
    });

    it("float number inside a string", () => {
        expect(profParseInt("12.35")).toBe(12);
    })

    it("string begginning with the space", () => {
        expect(profParseInt("  12")).toBe(12);
    })

    it("space in middle", () => {
        expect(profParseInt("12   3")).toBe(12);
    })

    it("first symbol is NaN", () => {
        expect(profParseInt("a123")).toBeNaN();
    })

    it("string begins from ++", () => {
        expect(profParseInt("++123")).toBeNaN();
    })

    it("space following -", () => {
        expect(profParseInt("- 123")).toBeNaN();
    })
})

describe("myToStringFromIntNumber test cases", () => {
    it("float number", () => {
        expect(myToStringFromIntNumber(12.35)).toBe("12");
    });

    it("string float number", () => {
        expect(myToStringFromIntNumber("12.35")).toBe("12");
    });

    it("empty number", () => {
        expect(myToStringFromIntNumber()).toBe("");
    });
    it("negative number", () => {
        expect(myToStringFromIntNumber(-12)).toBe("-12");
    });
    it("positive number", () => {
        expect(myToStringFromIntNumber(+12)).toBe("12");
    });
    it("empty string", () => {
        expect(myToStringFromIntNumber("")).toBe("");
    });
    it("string with number", () => {
        expect(myToStringFromIntNumber("a1")).toBe("");
    });
})