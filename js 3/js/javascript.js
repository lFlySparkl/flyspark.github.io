let p = document.getElementById("arrayOut");
let inputInformation = document.getElementById('inputInformation');

// function f10() {
//     let x = inputInformation.value;
//     return x;
// }
function getValue (input) {
    return input.value;
}
getValue (inputInformation);

let m = [1,9,3,7,99,100,66];
console.log(m);

// function massOut() {
//     // let p = document.getElementById("arrayOut");
//     let str = '';
//
//     for(let i=0; i<m.length; i++){
//         str += m[i] + ', ';
//     }
//     p.innerHTML=str;
// }
// massOut();

function massOut(arr, elem) {
    let str = '';
    for(let i=0; i < arr.length; i++){
        str += arr[i] + ', ';
    }
    elem.textContent = str;
}
massOut(m, p);


let pushBtn = document.getElementById('pushBtn');
pushBtn.addEventListener('click', push, false);

function push() {
    // let inputInformation = document.getElementById('inputInformation').value;
    m.push(getValue());
    massOut();
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', pop, false);

function pop() {
    m.pop();
    massOut();
}

let shiftBtn = document.getElementById('shiftBtn');
shiftBtn.addEventListener('click', shift, false);

function shift() {
    m.shift();
    massOut();
}

let unshiftBtn = document.getElementById('unshiftBtn');
unshiftBtn.addEventListener('click', unshift, false);

function unshift() {
    // let inputInformation = document.getElementById('inputInformation').value;

    // m.unshift(inputInformation.value);
    m.unshift(getValue());
    massOut();
}