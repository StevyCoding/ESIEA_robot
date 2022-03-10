const uuid = require('uuid');
var pathh = require('path')
$("#mainImage").click(function (e) {
  $("#divMark").css("left", e.pageX).css("top", e.pageY).show();
  // Position of the marker is now e.pageX, e.pageY
  // ... which corresponds to where the click was.
});
// send  image to local folder
path ="";
filename = "";
ext = "";
const fs = require('fs');

elem = document.getElementById("mainImage");
addButton = document.getElementById("addButton");
var base64 = "";
elem.addEventListener("mousemove", getcordd, false);
elem.addEventListener("click", saveCord, false);

addButton.addEventListener("click", SaveStandToLocalStorage, false);

// instruction to select cord of map
function getcordd(ev) {
  var bnds = ev.target.getBoundingClientRect();
  var x = ev.clientX - bnds.left;
  var y = ev.clientY - bnds.top;
  var pelem = document.getElementById("p");
  pelem.innerHTML = "position X = " + x + "; Position Y = " + y;
}
function saveCord(ev) {
  var bnds = ev.target.getBoundingClientRect();
  var x = ev.clientX - bnds.left;
  var y = ev.clientY - bnds.top;
  document.getElementById("x").value = x;
  document.getElementById("y").value = y;
}
// save to local storage
function SaveStandToLocalStorage() {
  file =document.getElementById("image");
  path = file.files[0].path;
  ext = pathh.extname(path)
  filename = uuid.v1()+ext;
  fs.copyFile(path, "robot_info/image/"+filename, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
    else {
   
      // Get the current filenames
      // after the function
      getCurrentFilenames();
      console.log("\nFile Contents of copied_file:",
        fs.readFileSync("copied_file.txt", "utf8"));
    }
  });
  stand = {
    id : (new Date()).getTime(),
    title: document.getElementById("title").value,
    openTime :  document.getElementById("openTime").value,  
    closeTime :  document.getElementById("closeTime").value,  
    location: document.getElementById("location").value,
    x: document.getElementById("x").value,
    y: document.getElementById("y").value,
    presentation: document.getElementById("presentation").value,
    //image: base64
    image : filename
  };
  var a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("stands")) ||  [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(stand);
  // Alert the array value
  alert(stand); // Should be something like [Object array]
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("stands", JSON.stringify(a));
  location.reload();
}


// create table of contents

createTable();

function createTable() {
  const json = localStorage.getItem("stands");
  const obj = JSON.parse(json);
  console.log(obj);
if(json != null) {
  for (var i = 0; i < obj.length; i++) {
    var newTr = document.createElement("tr");
    newTr.ir = i;
    var newTd1 = document.createElement("td");
    var newTd2 = document.createElement("td");
    var newTd3 = document.createElement("td");
    var newTd4 = document.createElement("td");
    var newTd5 = document.createElement("td");
    var newButton = document.createElement("button");
    var newButton2 = document.createElement("button");
    newButton.className = "but btn btn-primary";
    newButton2.className = "but btn btn-primary";

    newTd1.innerHTML = obj[i].title;
    newTd2.innerHTML = obj[i].id;
    newTd3.innerHTML = obj[i].location;
    newTd4.innerHTML = obj[i].openTime+"-"+obj[i].closeTime;
    newTd5.appendChild(newButton);
    newTd5.appendChild(newButton2);

    newButton.innerHTML = "supprimer";
    newButton.id = JSON.stringify(obj[i].id);
    newButton2.innerHTML = "detail";
    newButton2.id = JSON.stringify(obj[i].id);

    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);
    newTr.appendChild(newTd5);
    document.getElementById("tbody").appendChild(newTr);

    //newTd.appendChild(newTr2);
    //newTd.appendChild(newTr3);
  }
}
}
// delete stand algorithm
$(document).ready(function() {
$("button").click(function() {
  var button = $(this).html();
  if(button ==  "supprimer"){
    alert(button);
    const stands = JSON.parse(localStorage.getItem('stands'));
    const filtered = stands.filter(stand => stand.id != $(this).attr('id'));
    const delImg  = stands.filter(stand => stand.id == $(this).attr('id'));
    console.log("La valeur de img "+delImg);
    try {
      fs.unlinkSync("robot_info/image/"+delImg[0].image);
      //file removed
    } catch(err) {
      console.error(err);
    }

    localStorage.setItem('stands', JSON.stringify(filtered));
    location.reload();
  }
})
});
// convert image to bas64
/* function encodeImgtoBase64(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
      base64 = reader.result
  }
  reader.readAsDataURL(file);
} */


