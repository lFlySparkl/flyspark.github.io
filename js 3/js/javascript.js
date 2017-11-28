var m = [1,9,3,7,99,100,66];
console.log(m);

function massOut() {
    var p = document.getElementById("arrayOut");
    var str = '';

    for(var i=0; i<m.length; i++){
        str += m[i] + ', ';
    }
    p.innerHTML=str;
}
massOut();

var pushBtn = document.getElementById('pushBtn');
pushBtn.addEventListener('click', push, false);

function push() {
    var inputInformation = document.getElementById('inputInformation').value;
    m.push(inputInformation);
    massOut();
}

var popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', pop, false);

function pop() {
    m.pop();
    massOut();
}

var shiftBtn = document.getElementById('shiftBtn');
shiftBtn.addEventListener('click', shift, false);

function shift() {
    m.shift();
    massOut();
}

var unshiftBtn = document.getElementById('unshiftBtn');
unshiftBtn.addEventListener('click', unshift, false);

function unshift() {
    var inputInformation = document.getElementById('inputInformation').value;
    m.unshift(inputInformation);
    massOut();
}