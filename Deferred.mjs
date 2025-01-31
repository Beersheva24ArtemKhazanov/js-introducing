export default class Deferred {
    constructor() {
        this.callbacks = [];
        this.result = null;
    }

    then(callback) {
        this.callbacks.push(callback);
        return this;
    }

    resolve(str) {
        this.result = str;
        for (let callback of this.callbacks) {
            this.result = callback(this.result);
        }
    }
}