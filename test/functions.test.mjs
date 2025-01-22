import { it, describe, expect, test } from "vitest";
import { myBind } from "../functions.mjs";

describe("myBind test cases according ti rhe TODO comments", () => {
    const point = {x: 3, y: 4};
    function sumArguments(num3 = 0, num4 = 0) {
        return this.x + this.y + num3 + num4;
    }
    sumArguments.bind = myBind;
    const func = sumArguments.bind(point);
    it("no additional parameters passed", () => {
        expect(func()).toBe(7);
    })

    it(" all parameters are passed through", () => {
        expect(func(10, 20)).toBe(37);
    })

})