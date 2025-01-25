import { it, describe, expect, test } from "vitest";
import { myBind } from "../functions.mjs";

describe("myBind test cases according ti rhe TODO comments", () => {
    const point = {x:3, y:4}; 
    const dimensions = {x:3, y:4, z:30};
    point.sumArguments
    function sumArguments(num3=0, num4=0) {
        return this.x + this.y + num3 + num4;
    }
    sumArguments.bind = myBind;
    sumArguments.toString = function() {return this.name}
    console.log(`sumArguments string: ${sumArguments}`)
    const fun = sumArguments.bind(dimensions);
    it("no additional parameters passed", () => {
        
        expect(fun()).toBe(7);
    })
    it(" alla parameters are passed inside func ", () => {
        expect(fun(10, 20)).toBe(37);
    })
    
    it("all parameters inside bind slong with this", () => {
        const func = sumArguments.bind(dimensions, 10, 20);
        expect(func()).toBe(37);
    })

    it("part of args are passed in bind and other part in the bind", () => {
        const func = sumArguments.bind(dimensions, 10, 20);
        expect(func(20)).toBe(37);
    })

})