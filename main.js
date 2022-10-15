

let myTitle = document.getElementById("formTitle").value;
let myFeature = document.getElementById("feature");
let myBug = document.getElementById("bug");
let myTB;
if(myFeature.checked){
    myTB= document.getElementById("feature").id;
}
if(myBug.checked){
    myTB= document.getElementById("Bug").id;
}




function create (){
   
    console.log(myTitle);
    console.log(myTB);
    

}