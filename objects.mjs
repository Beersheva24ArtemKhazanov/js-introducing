export function makeIteratorClosedRange(min, max) {
    return {
        current: min,
        next: function() {
            return this.current > max ? {value:undefined, done: true} : {value: this.current++, done: false}
        }
    }
}

export function makeIterableClosedRange(min, max) {
    //TODO
}