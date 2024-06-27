let submit = document.querySelector("button");
let container = document.querySelector("#container");
let result = document.querySelector("#result");
let marks = document.querySelectorAll(".marks");

let percentCon = document.querySelector("#percentage");
let gradeCon = document.querySelector("#grade");
let passFailCon = document.querySelector("#passFail");

let i=0;
function getValue(){
    let value = parseFloat(marks[i].value);
    i++;
    return value;
}
function calPer(){
    let percent = (mathsValue+pyValue+chemValue+engVlaue+hinValue)/5;
    percentCon.innerText = `Your percentage is ${percent}%`;
    return percent;
}
function calGrade(percent){
    let grade;
    if(percent>=90&&percent<=100){
        grade = "A+";
    }
    else if(percent>=80){
        grade = "A";
    }
    else if(percent>=70){
        grade = "B"
    }
    else if(percent>=60){
        grade = "C";
    }
    else if(percent>=50){
        grade = "D";
    }
    else{
        grade = "F";
    }
    gradeCon.innerText = `Your grade is ${grade}`;
    return grade;
}
function passOrFail(grade){
    if(grade==="A+"||grade==="A"||grade==="B"||grade==="C"||grade==="D"){
        passFailCon.innerText = "Congratulations You passed in exam🎉";
    }
    else{
        passFailCon.innerText = "You failed in exam😢"
    }
}
submit.addEventListener("click",()=>{
    mathsValue=getValue();
    pyValue=getValue();
    chemValue=getValue();
    engVlaue=getValue();
    hinValue=getValue();
    container.classList.add("hide");
    result.classList.remove("hide");
    let percent = calPer();
    let grade = calGrade(percent);
    passOrFail(grade);
})

