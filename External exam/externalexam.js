function calculateGrade()
{
    let marks = [];

    marks[0] = Number(document.getElementById("sub1").value);
    marks[1] = Number(document.getElementById("sub2").value);
    marks[2] = Number(document.getElementById("sub3").value);
    marks[3] = Number(document.getElementById("sub4").value);

    let total = 0;

    for(let i = 0; i < marks.length; i++)
    {
        total = total + marks[i];
    }

    let average = total / 4;

    let grade;

    if(average >= 90)
    {
        grade = "A+";
    }
    else if(average >= 80)
    {
        grade = "A";
    }
    else if(average >= 70)
    {
        grade = "B";
    }
    else if(average >= 60)
    {
        grade = "C";
    }
    else if(average >= 50)
    {
        grade = "D";
    }
    else
    {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
    "Total Marks: " + total +
    "<br>Average: " + average.toFixed(2) +
    "<br>Grade: " + grade;
}