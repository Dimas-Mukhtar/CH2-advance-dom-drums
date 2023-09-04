let student1 = {
    nama: "Ale",
    age: 28,
    programming: ["Php", "Javascript", "Golang", "Java"]
}

let student2 = {
    nama: "Yoga",
    age: 30,
    programming: ["Javascript", "Kotlin"]
}

let student3 = {
    nama: "Fadhlan",
    age: 40,
    programming: ["Javascript", "India"]
}

// constructor function
class StudentsFsw {
    constructor(name, age, programmingLanguange){
        this.name = name
        this.age = age
        this.programmingLanguange = programmingLanguange
    }
}

// inisialisasi object
let students1 = new StudentsFsw("Hafidh", "30", ["Java"])
let students2 = new StudentsFsw("Adrian", "35", ["PHP"])
let students3 = new StudentsFsw("Diki", "20", ["Javascript"])

console.log(student1)