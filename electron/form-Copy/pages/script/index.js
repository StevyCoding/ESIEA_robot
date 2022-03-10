downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", Download, false);
const fs = require('fs');
function Download() {
    let filename = "robot_storage.json";
    let text = localStorage.getItem("stands");
    let text2 = localStorage.getItem("rubriques");
    let content = '{"stands" :  '+text+',"rubriques":'+text2+'}'
    content = JSON.stringify(JSON.parse(content), null, 4);
    fs.writeFile("robot_info/"+filename, content, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
   
      console.log("JSON file has been saved.");
  });
  }