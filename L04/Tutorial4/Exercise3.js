//Initialize a 2D array representing seats in a classroom (5 rows by 4 columns).
let classroomSeats = [
    ["00", "01", "02", "03"], //element 0
    ["10", "11", "12", "13"], //element 1
    ["20", "21", "22", "23"], //element 2
    ["30", "31", "32", "33"], //element 3
    ["40", "41", "42", "43"], //element 4
    ]

//Assign student names to each seat.

for (let i = 0; i < classroomSeats.length; i++)
{
    for (let j = 0; j < classroomSeats[i].length; j++)
    {
        let studentName = 'Student ' + i + j;
        classroomSeats[i][j] = studentName;
    }
}

console.log(classroomSeats);