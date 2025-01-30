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