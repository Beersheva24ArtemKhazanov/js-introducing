export function myMap(callback) {
    const ar = this;
    const res = new Array(ar.length);
    for (let i = 0; i < ar.length; i++) {
        res[i] = callback.call(undefined, ar[i], i)
    }
    return res;
}

export function myReduce(callback, initialValue) { 
    const ar = this;
    let res = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < ar.length; i++) {
         res = callback(res, ar[i]);
    }
    return res;
}