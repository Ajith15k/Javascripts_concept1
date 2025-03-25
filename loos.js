
//for (init,condition,iteration)

//for (let fr=5; fr>=5; fr--) {
    //const val = fr[fr];
  //  console.log(fr);
    
    
//}

//while init --while(cond){--statemet--iter}
let W=5;
let F=10;
while (W<=10 && F<=11) {
    console.log(W,F);
    W--;
    F++;
    
    
}

//init-do{--statement--iter}while
 let don=7;
 do {
    console.log(don);
    don--
    
 } while (don>=5);

 //for of
 let furit ="Ajith"
for (const val of furit) {
  console.log(val.toUpperCase());
}
//for in
let obj={
    name:"ak",
    place:"chennai",   
}
for ( QA in obj) {
    console.log(QA+"="+obj[QA]);
    
    
}

let obj1={
    name:"ak",
    place:"chennai",   
}
for (const key in obj1) {
    console.log(key.toUpperCase()+"="+obj1[key].replace("a","A").replace("c","C"));
    
    
}