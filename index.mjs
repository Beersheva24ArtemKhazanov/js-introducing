import Deferred from "./Deferred.mjs";

func2();
func1();
func3();
function func1() {
    a = 10;
}

function func2() {
    while (a < 3) {
        console.log(a++);
    }
}
function func3() {

    console.log(`a=${a}`);
}
var a = 0;

const d = new Deferred();
d.then(function (res) { console.log("1 ", res); return "a"; })
    .then(function (res) { console.log("2 ", res); return "b"; })
    .then(function (res) { console.log("3 ", res); return "c"; })
    .resolve('hello');