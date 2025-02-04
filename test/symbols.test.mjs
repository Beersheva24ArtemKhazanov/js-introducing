import { test, it, expect } from "vitest";
test ("symbols test", () => {
    const sym = Symbol();
    const sym1 = Symbol();
    const obj = {[sym]: 2};
    expect(sym == sym1).toBeFalsy();
    console.log(sym);
})