let fname="Akullu"
let lname="Edith"
let record ={
    fname,
    lname,
    fullName(){
        return(`My Name is ${this.fname} ${this.lname}`)
    },
    namChar(){
        lname.map((i)=>{
            console.log(i)
        })
    }
}

console.log(record.fullName())
console.log(record.namChar())