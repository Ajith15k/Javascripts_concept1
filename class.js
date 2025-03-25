// class room{
//     ac() {
//         console.log("BS");
        
//     }
//     bed() {
//         console.log("spring");
        
//     }
//     fan() {
//         console.log("orbit");
        
//     }

// }
// const output = new room();
// output.fan();
// output.ac();
// output.bed();

class CONS{
    constructor(Name,Department,Role){
        this.Name=Name,
        this.Department=Department,
        this.Role=Role

    }
    Value(){
        console.log(`I am ${this.Name}\n studied B.TECH ${this.Department}\n searching job for ${this.Role}Test role`);
        
    }
}
const finalvalue = new CONS("Ajit kumar","IT","QA");
finalvalue.Value();
