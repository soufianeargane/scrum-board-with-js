

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

let table =[];

let tasks ;


//document.querySelector('.submit').addEventListener('click',function()

function create() {
    // e.preventDefault()
    myTitle=document.getElementById("form").value
    // console.log(myTitle)
    //////////
    if(myFeature.checked){
        myTB= document.getElementById("feature").id
        // console.log(myTB)
    }
    if(myBug.checked){
        myTB= document.getElementById("bug").id;
        // console.log(myTB)
    }
    ///////////
    if(myOne.selected){
        myPriority = document.getElementById("one").id
        // console.log(myPriority)
    }
    if(myTwo.selected){
        myPriority = document.getElementById("two").id
        // console.log(myPriority)
    }
    if(myThree.selected){
        myPriority = document.getElementById("three").id
        // console.log(myPriority)
    }
    ////////////
    if(myToDo.selected){
        myStatus = document.getElementById("to do").id
        tasks = document.getElementById("to-do-tasks");
        // console.log(myStatus)
    }
    if(myDoing.selected){
        myStatus = document.getElementById("doing").id
        tasks = document.getElementById("in-progress-tasks");
        // console.log(myStatus)
    }
    if(myDone.selected){
        myStatus = document.getElementById("done").id
        tasks = document.getElementById("done-tasks");
        // console.log(myStatus)
    }
    ////
    myDate=document.getElementById("endDate").value
    // console.log(myDate)
    ////
    myDescription = document.getElementById("formTextarea").value
    // console.log(myDescription)
    table.push({
        title:myTitle,
        tb:myTB,
        priority:myPriority,
        status:myStatus,
        date:myDate,
        description:myDescription,
    })

    display()
}


function display (){
    
    tasks.innerHTML=''
    for(let i = 0; i < table.length; i++){
//tasks == document.getElementById("to-do-tasks")
        if( table[i].status === "to do" ){
            tasks.innerHTML +=`<button class=" w-100 border-0 mb-1 bg-white d-flex">
         					<div class="p-2">
         						<i class="bi bi-question-circle text-green-500 fs-4"></i> 
         					</div>
         					<div class=" d-flex flex-column text-start py-2">
         						<div class="fw-bolder h5 mb-1 ">  ${table[i].title}</div>
         						<div class="d-flex flex-column text-start">
         							<div class="text-gray-600 mb-1">#1 created in  ${table[i].date}</div>
         							<div class="mb-2" title="${table[i].description}">${table[i].description} </div>
         						</div>
         						<div class="">
        							<span class="rounded px-2 py-1 text-white bg-cyan-600"> ${table[i].tb}</span>
         							
         						</div>
         					</div>
         				</button> `
        }
        if(table[i].status === "doing"){
            tasks.innerHTML +=`<button class=" w-100 border-0 mb-1 bg-white d-flex">
         					<div class="p-2">
         						<i class="bi bi-question-circle text-green-500 fs-4"></i> 
         					</div>
         					<div class=" d-flex flex-column text-start py-2">
         						<div class="fw-bolder h5 mb-1 ">  ${table[i].title}</div>
         						<div class="d-flex flex-column text-start">
         							<div class="text-gray-600 mb-1">#1 created in  ${table[i].date}</div>
         							<div class="mb-2" title="${table[i].description}">${table[i].description} </div>
         						</div>
         						<div class="">
        							<span class="rounded px-2 py-1 text-white bg-cyan-600"> ${table[i].tb}</span>
         							
         						</div>
         					</div>
         				</button> `
        }
        if(table[i].status === "done" ){
            tasks.innerHTML +=`<button class=" w-100 border-0 mb-1 bg-white d-flex">
         					<div class="p-2">
         						<i class="bi bi-question-circle text-green-500 fs-4"></i> 
         					</div>
         					<div class=" d-flex flex-column text-start py-2">
         						<div class="fw-bolder h5 mb-1 ">  ${table[i].title}</div>
         						<div class="d-flex flex-column text-start">
         							<div class="text-gray-600 mb-1">#1 created in  ${table[i].date}</div>
         							<div class="mb-2" title="${table[i].description}">${table[i].description} </div>
         						</div>
         						<div class="">
        							<span class="rounded px-2 py-1 text-white bg-cyan-600"> ${table[i].tb}</span>
         							
         						</div>
         					</div>
         				</button> `
        }
    }
}