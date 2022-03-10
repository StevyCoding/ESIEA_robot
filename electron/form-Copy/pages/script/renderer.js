path ="";
filename = "";
$('#image').change(function () {
    path = this.files[0].path;
    filename = this.files[0].name;

    console.log("preuve suivante "+path);
});

const butImg = document.getElementById('image');
const fs = require('fs');

butImg.addEventListener('change', function (event) {
    fs.copyFile(path, "assets/image/"+filename, (err) => {
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

});


