class Student {
  nameRegex = /^[a-zA-Z]*$/;

  constructor(name, mathMark, engMark, passingYear) {
    this.name = name;
    this.mathMark = mathMark;
    this.engMark = engMark;
    this.passingYear = passingYear;
  }

  validation() {
    if (this.nameRegex.test(this.name) == false) {
      alert("Please Enter valid name");
      return false;
    }
    if (this.mathMark <= 0 || this.mathMark > 100) {
      alert("Please enter marks between 0 to 100");
      return false;
    }
    if (this.engMark <= 0 || this.engMark > 100) {
      alert("Please enter marks between 0 to 100");
      return false;
    }
    if (this.passingYear < 2000 || this.passingYear > 2020) {
      alert("Please Enter valid year");
      return false;
    }
    return true;
  }

  calcAverage(mathmark, engmark) {
    console.log(this.mathMark);
    var addition = parseInt(this.mathMark) + parseInt(this.engMark);
    this.average = addition / 2;
  }

  getDate() {
    var date = new Date().toDateString();
    this.createdDate = date;
  }
}

if (sessionStorage.getItem("studentData") == null) {
  studentArray = [];
  sessionStorage.setItem("studentData", JSON.stringify(studentArray));
}
function RegisterStudent() {
  var name = studentForm.studentName.value;
  var mathMark = studentForm.mathsMark.value;
  var engMark = studentForm.engMark.value;
  var passingYear = studentForm.passYear.value;

  var stud = new Student(name, mathMark, engMark, passingYear);
  console.log(stud);
  if (stud.validation()) {
    stud.calcAverage(mathMark, engMark);
    stud.getDate();
    arrayData = JSON.parse(sessionStorage.getItem("studentData"));
    arrayData.push(stud);
    sessionStorage.setItem("studentData", JSON.stringify(arrayData));
  } else {
    console.log("Somthing want wrong");
  }
}
displayData();

function displayData() {
  displayStudent = JSON.parse(sessionStorage.getItem("studentData"));
  for (var index = 0; index < displayStudent.length; index++) {
    document.querySelector("#displayData").innerHTML += `<tr><td>${index +
      1}</td><td>${displayStudent[index].name}</td><td>${
      displayStudent[index].mathMark
    }</td><td>${displayStudent[index].engMark}</td><td>${
      displayStudent[index].average
    }</td><td>${displayStudent[index].passingYear}</td><td>${
      displayStudent[index].createdDate
    }</td></tr>`;
  }
}
