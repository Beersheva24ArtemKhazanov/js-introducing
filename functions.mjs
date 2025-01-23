function sum(num1, num2) {
    return num1 + num2;
}
sum.a = 2;
sum(10, 10);
sum.call({x : 5}, 10, 10);

const point = {
    x : 5,
    y : 10
};
function displayPoint(z) {
    console.log(`x: ${this.x}; y= ${this.y}; z: ${z}`);
}
const display = displayPoint.bind(point);
display(40);
const displayPointArrow = (z) => {
    console.log(`x: ${this.x}; y= ${this.y}; z: ${z}`);
};

// Arrow function doesn't have own this
// const displayArrow = displayPointArrow.bind(point);
// displayArrow(40);

// display.call(point, 50);
// display.apply(point, 60);

export function myBind(thisArg) {
    const func = this;
    return (...args) => {
        return func.apply(thisArg, [...args]);
    }
}

function profBind(thisArg) {
    const func = this;
    return () => {
        func.apply(thisArg, arguments);
    }
}