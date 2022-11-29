import a from "./first.js";
import { b, c } from "./second.js";
function addTwo(a) {
    return a + 2;
}
console.log(addTwo("30"));
console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
