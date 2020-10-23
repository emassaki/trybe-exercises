grade(49);

function grade(grade) {
  if (grade > 100 || grade < 0) {
    console.log("Invalid grade");
    return;
  } else if (grade <= 100 && grade >= 90) {
    console.log("A");
    return;
  } else if (grade < 90 && grade >= 80) {
    console.log("B");
    return;
  } else if (grade < 80 && grade >= 70) {
    console.log("C");
    return;
  } else if (grade < 70 && grade >= 60) {
    console.log("D");
    return;
  } else if (grade < 60 && grade >= 50) {
    console.log("E");
    return;
  } else {
    console.log("F");
    return;
  } 
}
