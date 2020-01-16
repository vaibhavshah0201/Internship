var studentData = [];
// var regex = ['/^[a-zA-Z ]{2,30}$/','/^[0-9]{0,100}$/','/^[0-9]{4}$/']
var obj = {
  nameRegex: /^[a-zA-Z]*$/,
  markRegex: /^[0-9]{1,100}$/,
  yearRegex: /^[0-9]{4}$/
};

function calcAverage(mathmark, engmark) {
  return (parseFloat(mathmark) + parseFloat(engmark)) / 2;
}

function RegisterStudent() {
  studentData["name"] = studentForm.studentName.value;
  studentData["mathMarks"] = studentForm.mathsMark.value;
  studentData["engMarks"] = studentForm.engMark.value;
  studentData["passingYear"] = studentForm.passYear.value;

  if (obj.nameRegex.test(studentData["name"]) == false) {
    alert("Please Enter valid name");
    return false;
  }
  if (studentData["mathMarks"] <= 0 || studentData["mathMarks"] > 100) {
    alert("Please enter marks between 0 to 100");
    return false;
  }
  if (studentData["engMarks"] <= 0 || studentData["engMarks"] > 100) {
    alert("Please enter marks between 0 to 100");
    return false;
  }
  if (studentData["passingYear"] < 2000 || studentData["passingYear"] > 2020) {
    alert("Please Enter valid year");
    return false;
  }

  studentData["average"] = calcAverage(
    studentData["mathMarks"],
    studentData["engMarks"]
  );

  studentData["createdDate"] = new Date().toDateString();

  setSessions();
  window.location.reload();
}

function setSessions() {
  var counter = sessionStorage.getItem("counter");
  counter++;
  sessionStorage.setItem(`counter`, counter);
  sessionStorage.setItem(`StudentName${counter}`, studentData["name"]);
  sessionStorage.setItem(`StudentMathMark${counter}`, studentData["mathMarks"]);
  sessionStorage.setItem(`StudentEngMark${counter}`, studentData["engMarks"]);
  sessionStorage.setItem(`StudentYear${counter}`, studentData["passingYear"]);
  sessionStorage.setItem(`StudentAvg${counter}`, studentData["average"]);
  sessionStorage.setItem(`CreatedDate${counter}`, studentData["createdDate"]);
}
displayData();

function displayData() {
  for (var index = 1; index <= sessionStorage.getItem("counter"); index++) {
    document.querySelector(
      "#displayData"
    ).innerHTML += `<tr><td>${index}</td><td>${sessionStorage.getItem(
      `StudentName${index}`
    )}</td></td><td>${sessionStorage.getItem(
      `StudentMathMark${index}`
    )}</td><td>${sessionStorage.getItem(
      `StudentEngMark${index}`
    )}</td><td>${sessionStorage.getItem(
      `StudentAvg${index}`
    )}</td><td>${sessionStorage.getItem(
      `StudentYear${index}`
    )}</td><td>${sessionStorage.getItem(`CreatedDate${index}`)}</td></tr>`;
  }
}

// sessionStorage.set;
