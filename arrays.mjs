export function myMap(callback) {
    const ar = this;
    const res = new Array(ar.length);
    for (let i = 0; i < ar.length; i++) {
        res[i] = callback.call(undefined, ar[i], i)
    }
    return res;
}

export function myReduce(callback) {
    //TODO
    //see documentation 
    const ar = this;
    let res = 0;
    for (let i = 0; i < ar.length; i++) {
         res = callback(res, ar[i]);
    }
    return res;
}