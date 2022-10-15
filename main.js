

let myTitle ;
//////
let myFeature = document.getElementById("feature");
let myBug = document.getElementById("bug");
let myTB;
//////
let myOne = document.getElementById("one");
let myTwo = document.getElementById("two");
let myThree = document.getElementById("three");
let myPriority
/////
let myToDo = document.getElementById("to do");
let myDoing = document.getElementById("doing");
let myDone = document.getElementById("done");
let myStatus
///////
let myDate
////
let myDescription


//document.querySelector('.submit').addEventListener('click',function()

function create() {
    // e.preventDefault()
    myTitle=document.getElementById("form").value
    console.log(myTitle)
    //////////
    if(myFeature.checked){
        myTB= document.getElementById("feature").id
        console.log(myTB)
    }
    if(myBug.checked){
        myTB= document.getElementById("bug").id;
        console.log(myTB)
    }
    ///////////
    if(myOne.selected){
        myPriority = document.getElementById("one").id
        console.log(myPriority)
    }
    if(myTwo.selected){
        myPriority = document.getElementById("two").id
        console.log(myPriority)
    }
    if(myThree.selected){
        myPriority = document.getElementById("three").id
        console.log(myPriority)
    }
    ////////////
    if(myToDo.selected){
        myStatus = document.getElementById("to do").id
        console.log(myStatus)
    }
    if(myDoing.selected){
        myStatus = document.getElementById("doing").id
        console.log(myStatus)
    }
    if(myDone.selected){
        myStatus = document.getElementById("done").id
        console.log(myStatus)
    }
    ////
    myDate=document.getElementById("endDate").value
    console.log(myDate)
    ////
    myDescription = document.getElementById("formTextarea").value
    console.log(myDescription)
}