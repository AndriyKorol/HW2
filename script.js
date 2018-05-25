//1. Assignment

a += 10;
b *= 18;
c -= 10;

x += a;
y *= z;
i *= 5 * y;

x *= x;

//2. Conditional statements

let k;
let n;

k = ( k === "hidden" ) ? "visible" : "hidden";
console.log(k);

if ( n === 0 ){
    n = 1;
} else if ( n < 0 ){
    n = "less than zero";
} else ( n > 0 ){
    n *= 10;
}
console.log(n);

n === 0 ? 1:
    n < 0 ? n = "less than zero" : n += 10;
console.log(n);

//3. switch ... case
let m = 'none';

switch (m){
    case m == 'block' : console.log('block')
    break
    case m == 'none' : console.log('none')
    break
    case m == 'inline' : console.log('inline')
    break
    default : console.log('other')
    break
}

// 4. Conversion types

let a = 0 || 'string'; // 0 = false тоді верне 'string' тому що 'string' буде true
let a = 1 && 'string'; // якщо всі операнди є true, тоді вертає останній, тобто верне 'string'
let a = null || 25; // null = false тоді верне 25 тому що 25 буде true
let a = null || 0 || 35; // null = false i 0 = false тоді верне 35 бо 35 буде true
let a = null && 0 && 35; // перене перший фолс, тобто null

12 + 14 + '12' // = "2612" додавання будь-якого елемента до рядка
3 + 2 - '1' // = 4  перетворення рядка в число відбувається в усіх випадках крім додавання
'3' + 2 - 1 // = '32' - 1 = 31
true + 2 // = 3 true = 1
+'10' + 1 // = 11 унарний "+" перетворює рядок на число
undefined + 2 // = NaN  при всіх арифметичних діях з undefined
null + 5 // = 5 null = 0
true + undefined // = NaN при всіх арифметичних діях з undefined, окрім undefined з рядком
