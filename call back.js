function A(callback) {
    setTimeout(() => {
        console.log("i am ajith")
        callback();
    }, 2500);  
}
function B(callback) {
    setTimeout(() => {
        console.log("i'm a QA engineer")
        callback();
    }, 500);
}
function C() {
    setTimeout(() => {
        console.log("my Skills:js,playwright,BDD,SQL,jira,GIT")
    }, 1000);
}
A(()=>{
    B(()=>{
        C(()=>{

        })
    })
})