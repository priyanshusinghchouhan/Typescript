// A Mini - Project 
// A Student Record App mini-project is about practicing interfaces, enums, types, arrays, functions


enum Subjects {
    Maths = "Maths",
    English = "English",
    Hindi = "Hindi",
    Science = "Science",
    Computer = "Computer Science"
}

type Score = {
    subject: Subjects,
    marks: number
}

interface Student {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    subject: Subjects[],
    scores: Score[]
}


let firstStudent: Student =  {
    id: 1,
    name: "Pedri",
    age: 14,
    isActive: true,
    subject: [Subjects.Maths, Subjects.Computer],
    scores: [
        {subject: Subjects.Maths, marks: 97},
        {subject: Subjects.Computer, marks: 99}
    ]
}


function average(avg: Student){
    const totalMarks = avg.scores.reduce((sum, it) => sum + it.marks, 0)
    const totalSubjects = avg.subject.length;
    const averageMarks = totalMarks/totalSubjects

    console.log(averageMarks)
}

console.log(firstStudent)
average(firstStudent)