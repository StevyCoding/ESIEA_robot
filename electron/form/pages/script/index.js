downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", Download, false);
function Download() {
    let filename = "robot_storage.json";
    let text = localStorage.getItem("stands");
    let text2 = localStorage.getItem("rubriques");
    let content = '{"stands" :  '+text+',"rubriques":'+text2+'}'
    content = JSON.stringify(JSON.parse(content), null, 4);
    let blob = new Blob([content], { type: "JSON/plain" });
    let link = document.createElement("a");
    link.download = filename;
    //link.innerHTML = "Download File";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }, 100);
  }