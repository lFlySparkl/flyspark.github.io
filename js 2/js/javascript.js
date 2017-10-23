/* Задание 1. Пользователь вводит год рождения в input. Пользователь может ввести год
 рождения в двух форматах: 1988 или 02 (имеется ввиду 2002). Программа должна
 вывести количество лет которое исполнилось пользователю.*/

// function str_pad () {
// // var old;
// // old=document.getElementById("1").value;
// //     var input;
// //     input=document.getElementById("1").value;
//
//     str_pad(test1, 4, '20', 'STR_PAD_LEFT');
//     console.log(test1);
// // alert('Вы родились:' + (2017-input));
// }

function func13() {
    var test1, result;
    test1 = document.getElementById("11").value;
    // test1 = parseInt(test1);
    result = document.getElementById("1234");

    if (test1 >= 1 && test1 <= 17) {
        result.innerHTML = 'Вам: ' + (2017 - ('20' + test1)) + ' лет.';
    }
    else if (test1 >= 1900 && test1 <= 1999) {
        result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет.';
    }
    else if (test1 >= 2000 && test1 <= 2017) {
        result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет.';
    }
    else if (test1 >= 100 && test1 <= 1900) {
        result.innerHTML = 'Вам: ' + (2017 - test1) + ' лет. Но этого не может быть.';
    }
    else if (test1 >= 18 && test1 <= 99) {
        result.innerHTML = "Такой год еще не наступил.";
    }
    else if (test1 >= 2017 && test1 <= 9999) {
        result.innerHTML = "Такой год еще не наступил.";
    }
    else {
        result.innerHTML = "Такой год еще не наступил.";
    }

}
/* Задание 2. Пользователь вводит 2 числа. Найти и вывести максимальное из данных двух
 чисел. Учтите вариант равенства чисел.*/

function number() {

    var num1, num2, result, v;
    v = document.getElementById("44");

    num1 = document.getElementById("22").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("33").value;
    num2 = parseInt(num2);

    result = Math.max(num1, num2);

    v.innerHTML = 'Максимальное число: ' + result;
}


/* Задание 3. В первом подъезде номера квартир от 1 до 20, во втором от 21 до 64, в
 третьем от 65 до 80. Пользователь вводит номер квартиры, необходимо указать в каком
 она подъезде.
 Читать о else if*/

function func1() {
    var numb1, result;
    numb1 = document.getElementById("n1").value;
    numb1 = parseInt(numb1);
    result = document.getElementById("n2");

    if (numb1 >= 1 && numb1 <= 20) {
        result.innerHTML = 'Ваш подъезд: 1';
    }
    else if (numb1 >= 21 && numb1 <= 64) {
        result.innerHTML = 'Ваш подъезд: 2';
    }
    else if (numb1 >= 65 && numb1 <= 85) {
        result.innerHTML = 'Ваш подъезд: 3';
    }
    else {
        result.innerHTML = "Таких квартир в этом доме нету.";
    }

}


/*Задача 4. Два поля ввода: Логин и пароль. Есть 3 пользователя:
 ivan -> 333
 ssss-> 666
 gibs ->0000
 Если введен правильный логин и пароль вывести “Добро пожаловать”, в противном
 случае - вывести “ошибка”.*/

function func2() {
    var log1, pass1;
    log1 = document.getElementById("log");
    pass1 = document.getElementById("pas");

    if (log1 == 'ivan' && pass1 == '333') {
        alert('Добро пожаловать!');
    }
    else if (log1 == 'ssss' && pass1 == '666') {
        alert('Добро пожаловать!');
    }
    else if (log1 == 'gibs' && pass1 == '0000') {
        alert('Добро пожаловать!');
    }
    else {
        alert('Я вас не знаю')
    }
}

// var userName = prompt('Кто пришёл?', '');
//
// var pass = prompt('Пароль?', '');
//
// if (userName == 'ivan' && pass == '333')
// {
//     alert( 'Добро пожаловать!' );
// }
// else if(userName == 'ssss' && pass == '666'){
//     alert( 'Добро пожаловать!' );
// }
// else if(userName == 'gibs' && pass == '0000'){
//     alert( 'Добро пожаловать!' );
// }
// else if (pass == null)
// { // (*)
//     alert( 'Вход отменён' );
// } else {
//     alert( 'Я вас не знаю' )
// }

/*Задание 5. Пользователь вводит 3 числа. Найти и вывести максимальное из данных трех
 чисел.*/

function number2() {

    var num1, num2, num3, result, v;
    v = document.getElementById("n212");

    num1 = document.getElementById("n777").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n778").value;
    num2 = parseInt(num2);

    num3 = document.getElementById("n779").value;
    num3 = parseInt(num3);

    result = Math.max(num1, num2, num3);

    v.innerHTML = 'Максимальное число: ' + result;
}

// Задачи на цикл for
/*1. Вывести четные числа от 0 до 101.*/

function func5() {

    var p;
    p = document.getElementById("score101");

    for (var i = 0; i <= 101; i++) {
        if (i % 2 == 0) {
            p.innerHTML += i + ' ';
        }
    }
}
/*2. Вывести числа в следущей последовательности: 200 199 198 ... 0.*/

function func6() {
    var p;
    p = document.getElementById("score200");
    for (i = 200; i >= 0; i--) {
        p.innerHTML += i + ' ';
    }
}

/*3. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).*/

function func7(n) {

    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}
function func8() {
    var p;
    p = document.getElementById("sum100");
    p.innerHTML += func7(100);
}

/*4. Задайте два input. В первый вводится число, во второе его степень. С помощью
 цикла возведите число в степень. Напечатайте результат.*/

function func9() {
    var a, b, p;
    a=document.getElementById("i567").value;
    a = parseInt(a);
    b=document.getElementById("i987").value;
    b = parseInt(b);
    p=document.getElementById("i944");
    p.innerHTML+=Math.pow(a,b);
}

/*5. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
 Т.е.:
 1*7=7
 2*7=14
 3*7=21...*/
function func10(){
    var a;
    a=document.getElementById("sum719");
    var i=7;
    for (j=1; j<10; j++)
    a.innerHTML+="<p>"+i+"*"+j+" = "+(i*j)+"</p>";

}

/*1. С помощью цикла вывести произведение чисел от 1 до 50.*/

function func11(){
    var p;
    p=document.getElementById("sum50");
    var i = 1;
    var production = 1;

    do{
        production *= i;
        i++;
    }while(i <= 50)

    p.innerHTML+="Произведение чисел от 1 до 50: " + production;
}


/*2. Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что
 спецсимвол получается комбинацией &#число; Например &#1222;*/
function func12() {
    var p;
    p=document.getElementById("score2000");
    var i=1000;
    while (i<=2000){
        p.innerHTML+='&#'+i+' ';
        i++;
    }
}
