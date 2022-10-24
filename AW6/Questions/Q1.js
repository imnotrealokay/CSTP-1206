
let student = [
    {
        name: "Daniel",
        email: "daniel@gmail.com",
        marks: [80, 60, 50, 70, 95]
    },
    {
        name: "Mark",
        email: "mark@gmail.com",
        marks: [99, 40, 84, 72, 60]
    },
    {
        name: "Stacy",
        email: "stacy@gmail.com",
        marks: [8, 30, 11, 0, 20]
    },
    {
        name: "Geri",
        email: "geri@gmail.com",
        marks: [100, 99, 95, 85, 99]
    }
];


const studentWithHighestMarks = (array) => {
    let marksArr = [];
    let sum = 0;
    let sumArr = [];

    for (let key in array) {
        marksArr.push(array[key].marks);
    }

    let sumOfMarks = (item) => {
        sum += item;
    }

    for (let i in marksArr) {
        marksArr[i].forEach(sumOfMarks);
        sumArr.push(sum)
        sum = 0;
        i++;
    }
    console.log(sumArr)

    let highestValue = sumArr.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue
    }, -Infinity)

    return highestValue;

}

console.log(studentWithHighestMarks(student)); 