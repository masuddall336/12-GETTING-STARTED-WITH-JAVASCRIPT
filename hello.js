var prizeBanana = 12;
console.log(prizeBanana);
console.log(typeof prizeBanana);




var myName = "Abdullah al - Masud";
console.log(myName);
console.log(typeof myName);



var testTrue = true;
console.log(testTrue);
console.log(typeof testTrue);




var testFalse = false;
console.log (testFalse);
console.log(typeof testFalse);




var namee = "Abdullah al - Masud";
console.log(namee);
console.log(namee.toUpperCase());
console.log(namee.toLocaleLowerCase());
console.log(namee.indexOf("al"));
console.log(namee.indexOf("AL"));




var testSplit = "How to do testSplit..!";
console.log(testSplit.split("to"));
console.log(testSplit);



// conver String To Number--
var a = 10;
var b = "20";
b= parseFloat(b);
console.log(a+b);

var b = 10;
var c ="20";
var convart = parseFloat(c);
console.log(b+convart);

var d = 10;
var e = "20";
var convert2 = parseFloat(e);
var rasult = d+convert2;
console.log(rasult);

var f = "12";
var g = 12;
var convertNumber = +f;
var ras = convertNumber+g;
console.log(ras);

// Number to string Conver--
var h = 40;
var i = 60;
i = ""+i;
console.log(typeof i);
var conv = "" + i;
console.log(h+conv);






var age = 23.5;
age = parseInt(age);
console.log(age);

var age2 = 22.9;
var testIntizar = parseInt(age2);
console.log(testIntizar);





var j = .1;
var h = .2;
var rasu = j+h;
rasu = rasu.toFixed(3);
console.log(rasu);




// oparatoe's----
var plus = 1000;
plus  = plus + 2;
console.log(plus);

var plus2 = 2000;
var z = plus2 + 1;
console.log(z);

var plus3 = 3000;
plus3 ++;
console.log(plus3);

var mainus = 12;
mainus--;
console.log(mainus);

var zx = 19;
var zx2 = "Masud";
var zxzx2 = zx2 +" "+ zx;
console.log(zxzx2);

var absolute = -13.56;
absolute = Math.abs(absolute);
console.log(absolute);

var rounds = 10.500000;
rounds = Math.round(rounds);
console.log(rounds);

var testCeil = 5.2342;
testCeil = Math.ceil(testCeil);
console.log(testCeil);

var testFloor = 5.97698;
testFloor = Math.floor(testFloor);
console.log(testFloor); 

var testround = 17.4999;
testround = Math.random();
console.log(testround);

var lotari = Math.random()*100;
var rasuu = Math.round(lotari);
console.log(rasuu);








// Math---
var aa = 10;
var bb = 15;
var rasultaabb = aa+bb;
console.log(rasultaabb);

var bb = 10;
var cc = 15;
var rasultbbcc = bb-cc;
console.log(rasultbbcc);

var cc = 10;
var dd = 15;
var rasultccdd = cc*dd;
console.log(rasultccdd);

var ee = 10;
var ff = 14;
var rasulteeff = ee/ff;
console.log(rasulteeff);

var gg = 15;
var hh = 10;
var rasultgghh = gg % hh;
console.log(rasultgghh);






// Condition-----
var ApplePrize = 30;
if(ApplePrize <= 30){
    console.log("You can buy this food.");
}else{
    console.log("you can't btt this food.");
}

var busSit = 13;
if(busSit > 12){
    console.log("We will go to enjoy our picnic.");
}else{
    console.log("We will not go to enjoy our picnic.");
}

var orangePrize = 119;
if(orangePrize == 120){
    console.log("you can eat this Orange.");
}else{
    console.log("you can't eat this orange.");
}

var firstOverRun = 13;
if(firstOverRun != 16){
    console.log("I am win this game");
}else{
    console.log("i am not win this game.");
}

var a = true;
var b = 500;
if(a  == true && b > 450){
    console.log("you can do it.");
}else{
    console.log("you can not do it.");
}

var ifElseOr = false;
var ifElseOr2 = 200;
if(ifElseOr == true && ifElseOr2 > 300){
    console.log("ok");
}else if(ifElseOr == true){
    console.log("some ok");
}else{
    console.log("not ok");
}




// Time----
var time = new Date ("1971-1-1");
console.log(time);