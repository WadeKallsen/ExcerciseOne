for (var i = 0; i <10; i++){
    console.log(i);
}

for (var i = 0; i <=20; i++){
    if (i % 3 == 0){
        console.log(i);
    }
}

var names = ["Wade", "Andrea", "Saprina"];

for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
}

var a = 0;

while (a <10){
    console.log(a);
    a++;
}

var a = 101;

do{
    console.log(a);
    a++; 
} while (a < 100)

for (i in names){
    console.log(names[i]);
}

for (i of names ){
    console.log(i);
}