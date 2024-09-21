const human ={
    eat:()=>{
        console.log(`${this.name} can eat`)
    },
    sleep:()=>{
        console.log(`${this.name} can sleep`)
    }
}
const user ={
    name:"chombu"
}
user.__proto__ =human;
console.log(user.name)
console.log(Object.getPrototypeOf(user)===human)

