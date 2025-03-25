function mrg() {
    //1.string
console.log('java');  //using single or double qoutation
//2.number
console.log(1.58);
//3.boolean
console.log(true);
console.log(false);
//4.null
console.log(null);
//5.undefined
var a;
console.log(a);
    
}
mrg();
//function types
//1.fun statement and declaration
function dec(a) {   //---a is a params
    console.log(a);   
}
dec("function1");
//2.fun expression or annoymous
let fun=function ex(params1) {
    console.log(params1); 
}
fun('javascript');
//annoymous
let annoy=function(an){
    console.log(an);
}
annoy('annoymous');
//3.IIFE ---immediate invoke function expression
(function (IIFE){
    console.log(IIFE);
    
})
("IIFE");
//4.Arrow --- it is called single line function
//syntax: ()->{}  
var arw = (a) => {
    console.log(a)}
arw('Arrows->');




