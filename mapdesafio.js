const list = [
    {name: "Rodolfo", vip: true},
    {name: "Renan", vip: false },
    {name: "Renato", vip: true },
    {name: "Romário", vip: true },
    {name: "Rómulo", vip: false },
    {name: "Rodrigo", vip: true},
    {name: "Reiner", vip: false}
];



const ViporNot = list.map((Vips) => {
    const ViporNot = {
        name : Vips.name, 
        vip : Vips.vip, 
        sector : Vips.vip ? 'Black' : 'Green'
    }
    return ViporNot
}) 

console.log(ViporNot)

//---------------------------------------------------------
const students = [
    {name: "Renato", Grade: 7},
    {name: "Rodolfo", Grade: 5},
    {name: "Renan", Grade: 8},
    {name: "Roger", Grade: 9},
    {name: "Renata", Grade: 3},
    {name: "Rodrigo", Grade: 2},
    {name: "Rafael", Grade: 10}
]

const approved = students.map((aluno) => {
    const approved = {
        name: aluno.name,
        result: aluno.Grade >= 7 ? 'Approved' : 'disapproved'
    }
    return approved 
})

console.log(approved)

//------------------------------------------------------------------------------
// outra forma de se fazer também: 

 const approvedStudents = students.map (student => {
    let approvedOrNot 

    if (student.Grade >= 7) {
        approvedOrNot = 'approved'
    }
     else {
        approvedOrNot = 'disapproved'
     }

const students = {
    name: student.name, 
    finalResult: approvedOrNot
}
return students
})

console.log(approvedStudents) 




