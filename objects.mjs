export function makeIteratorClosedRange(min, max) {
    return {
        current: min,
        next: function() {
            return this.current > max ? {value:undefined, done: true} : {value: this.current++, done: false}
        }
    }
}

export function makeIterableClosedRange(min, max) {
    return {
        [Symbol.iterator]: makeIteratorClosedRange.bind(undefined, min, max)
    }
}

export function* makeGeneratorClosedRange(min, max) {
    for (let i = min; i <= max; i++) {
        yield i
    }
}

export function makeIterableBasedGenerator(min, max) {
    return {
        [Symbol.iterator]: makeGeneratorClosedRange.bind(undefined, min, max)
    }
}