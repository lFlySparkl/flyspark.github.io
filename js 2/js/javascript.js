/* Задание 1. Пользователь вводит год рождения в input. Пользователь может ввести год
 рождения в двух форматах: 1988 или 02 (имеется ввиду 2002). Программа должна
 вывести количество лет которое исполнилось пользователю.*/

let yearInputBtn = document.getElementById('yearInputBtn');
yearInputBtn.addEventListener('click', getAge, false);

function getAge() {
    const yearInput = document.getElementById("yearInput").value;
    const yearInputBtn = document.getElementById("yearInputBtn");
    const yearInputResult = document.getElementById("enterResult");

    let fullYear = "Введите правильный год вашего рождения";
    let date = new Date();
//getFullYear - Используйте эту функцию, чтобы быть уверенным, что год будет правильным после 2000 года.
    let year = date.getFullYear();

    if (yearInput.length < 4, yearInput >= 1 && yearInput <= 17) {
        yearInputResult.innerHTML = 'Вам: ' + (2017 - ('20' + yearInput)) + ' лет.';
    }
    else if (yearInput >= 1900 && yearInput <= 1999) {
        yearInputResult.innerHTML = 'Вам: ' + (2017 - yearInput) + ' лет.';
    }
    else if (yearInput >= 2000 && yearInput <= 2017) {
        yearInputResult.innerHTML = 'Вам: ' + (2017 - yearInput) + ' лет.';
    }
    else {
        yearInputResult.innerHTML = fullYear;
    }
    // yearInputResult.textContent = fullYear;
}
// function func13() {
//     var test1, result;
//     test1 = document.getElementById("yearInput").value;
//     // test1 = parseInt(test1);
//     result = document.getElementById("enterResult");
//
//     if (test1 >= 1 && test1 <= 17) {
//         result.innerHTML = 'Вам: ' + (2017 - ('20' + test1)) + ' лет.';
//     }
//     else if (test1 >= 1900 && test1 <= 1999) {
//         result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет.';
//     }
//     else if (test1 >= 2000 && test1 <= 2017) {
//         result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет.';
//     }
//     else if (test1 >= 100 && test1 <= 1900) {
//         result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет. Но этого не может быть.';
//     }
//     else if (test1 >= 18 && test1 <= 99) {
//         result.innerHTML = "Такой год еще не наступил.";
//     }
//     else if (test1 >= 2017 && test1 <= 9999) {
//         result.innerHTML = "Такой год еще не наступил.";
//     }
//     else {
//         result.innerHTML = "Такой год еще не наступил.";
//     }
//
// }


/* Задание 2. Пользователь вводит 2 числа. Найти и вывести максимальное из данных двух
 чисел. Учтите вариант равенства чисел.*/

let numberBtn = document.getElementById('numberBtn');
numberBtn.addEventListener('click', number, false);

function number() {

    let num1, num2, result, v;
    v = document.getElementById("numberResult");

    num1 = document.getElementById("firstNumber").value;
    num1 = parseFloat(num1);

    num2 = document.getElementById("secondNumber").value;
    num2 = parseFloat(num2);

    result = Math.max(num1, num2);

    v.innerHTML = 'Максимальное число: ' + result;
}


/* Задание 3. В первом подъезде номера квартир от 1 до 20, во втором от 21 до 64, в
 третьем от 65 до 80. Пользователь вводит номер квартиры, необходимо указать в каком
 она подъезде.
 Читать о else if*/

let entranceBtn = document.getElementById('entranceBtn');
entranceBtn.addEventListener('click', func1, false);

function func1() {
    let numb1, result;
    numb1 = document.getElementById("numberInput").value;
    numb1 = parseInt(numb1);
    result = document.getElementById("entranceResult");

    let text = "Таких квартир в этом доме нет.";

    if (numb1 >= 1 && numb1 <= 20) {
        text = 'Ваш подъезд: 1';
    }
    else if (numb1 >= 21 && numb1 <= 64) {
        text = 'Ваш подъезд: 2';
    }
    else if (numb1 >= 65 && numb1 <= 85) {
        text = 'Ваш подъезд: 3';
    }
    result.innerHTML = text;
}


/*Задача 4. Два поля ввода: Логин и пароль. Есть 3 пользователя:
 ivan -> 333
 ssss-> 666
 gibs ->0000
 Если введен правильный логин и пароль вывести “Добро пожаловать”, в противном
 случае - вывести “ошибка”.*/

let checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener('click', func100, false);

const log = document.getElementById("log").value;
const pass = document.getElementById("pas");
const result = document.getElementById("res");

let user = {
    'ivan': '333',
    'ssss': '666',
    'gibs': '0000'
};

function verification(obj, log, pass) {
    return obj[log] === pass;
}

function hello(bool) {
    let hello = (bool === true) ? 'Добро пожаловать!' : 'Я вас не знаю';
    return hello;
}
function func100() {
    result.innerHTML = (hello(verification(user, log, pass)));
}

/*Задание 5. Пользователь вводит 3 числа. Найти и вывести максимальное из данных трех
 чисел.*/
let maxNumberBtn = document.getElementById('maxNumberBtn');
maxNumberBtn.addEventListener('click', number2, false);

function number2() {

    let num1, num2, num3, result, v;
    v = document.getElementById("maxNumberResult");

    num1 = document.getElementById("firstNumberEx5").value;
    num1 = parseFloat(num1);

    num2 = document.getElementById("secondNumberEx5").value;
    num2 = parseFloat(num2);

    num3 = document.getElementById("thirdNumberEx5").value;
    num3 = parseFloat(num3);

    result = Math.max(num1, num2, num3);

    v.innerHTML = 'Максимальное число: ' + result;
}

// Задачи на цикл for
/*1. Вывести четные числа от 0 до 101.*/

let evenNumbersBtn = document.getElementById('evenNumberBtn');
evenNumbersBtn.addEventListener('click', func5, false);

function func5() {

    var p;
    p = document.getElementById("evenNumbersResult");

    for (var i = 0; i <= 101; i = i + 2) {
        p.innerHTML += i + ' ';
    }
}

/*2. Вывести числа в следущей последовательности: 200 199 198 ... 0.*/

let decreaseNumbersBtn = document.getElementById('reduceNumbersBtn');
decreaseNumbersBtn.addEventListener('click', func6, false);

function func6() {
    var p;
    p = document.getElementById("decreaseNumbersResult");
    for (i = 200; i >= 0; i--) {
        p.innerHTML += i + ' ';
    }
}

// var i = 200;
// while (i-- > 0)
//     console.log(i);

/*3. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).*/

let sumOfNumbersBtn = document.getElementById('sumOfNumbersBtn');
sumOfNumbersBtn.addEventListener('click', func8, false);

function func7(n) {

    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}

function func8() {
    var p;
    p = document.getElementById("sumOfNumbersResult");
    p.innerHTML += func7(100);
}

/*4. Задайте два input. В первый вводится число, во второе его степень. С помощью
 цикла возведите число в степень. Напечатайте результат.*/

let exponentiationBtn = document.getElementById('exponentiationBtn');
exponentiationBtn.addEventListener('click', func9, false);

function func9() {
    var a, b, p;
    a = document.getElementById("number").value;
    a = parseInt(a);
    b = document.getElementById("exponentInput").value;
    b = parseInt(b);
    p = document.getElementById("exponentiationResult");

    var result = a;
    var counter = 1;
    while (counter < b) {
        result = result * a;
        counter++;
    }
    p.innerHTML += 'Результат: ' + result;
}

/*5. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
 Т.е.:
 1*7=7
 2*7=14
 3*7=21...*/

let multiplicationTableBtn = document.getElementById('multiplicationTableBtn');
multiplicationTableBtn.addEventListener('click', func10, false);

function func10() {
    var a;
    a = document.getElementById("multiplicationTableResult");
    var i = 7;
    for (j = 1; j < 10; j++)
        a.innerHTML += "<p>" + i + "*" + j + " = " + (i * j) + "</p>";

}

/*1. С помощью цикла вывести произведение чисел от 1 до 50.*/

let productOfNumbersBtn = document.getElementById('productOfNumbersBtn');
productOfNumbersBtn.addEventListener('click', func11, false);

function func11() {
    var p;
    p = document.getElementById("productOfNumbersResult");
    var i = 1;
    var production = 1;

    do {
        production *= i;
        i++;
    } while (i <= 50)

    p.innerHTML += "Произведение чисел от 1 до 50: " + production;
}


/*2. Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что
 спецсимвол получается комбинацией &#число; Например &#1222;*/

let specialCharactersBtn = document.getElementById('specialCharactersBtn');
specialCharactersBtn.addEventListener('click', func12, false);

function func12() {
    var p;
    p = document.getElementById("specialCharactersResult");
    var i = 1000;
    while (i <= 2000) {
        p.innerHTML += '&#' + i + ' ';
        i++;
    }
}