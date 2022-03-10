
 
 //var file = document.querySelector('#files > input[type="file"]').files[0];
// getBase64(file); // prints the base64 string
tinymce.init({
	/* replace textarea having class .tinymce with tinymce editor */
	selector: "#editor1",
	
	/* width and height of the editor */
	width: "100%",
	height: 300,
	
	/* display statusbar */
	statubar: true,
	
	/* plugin */
	plugins: [
		"advlist autolink link image lists charmap print preview hr anchor pagebreak paste",
		"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
		"save table contextmenu directionality emoticons template paste textcolor",
	],

	/* toolbar */
	toolbar: "uploadimage | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",

    paste_data_images: false,
    file_picker_types: 'image',
    file_picker_callback: function(cb, value, meta) {
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
  
      input.onchange = function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function () {
          var id = 'blobid' + (new Date()).getTime();
          var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
          var base64 = reader.result.split(',')[1];
          var blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
  
          // call the callback and populate the Title field with the file name
          cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
      };
      
      input.click();
    },

	/* style */
	style_formats: [
		{title: "Headers", items: [
			{title: "Header 1", format: "h1"},
			{title: "Header 2", format: "h2"},
			{title: "Header 3", format: "h3"},
			{title: "Header 4", format: "h4"},
			{title: "Header 5", format: "h5"},
			{title: "Header 6", format: "h6"}
		]},
		{title: "Inline", items: [
			{title: "Bold", icon: "bold", format: "bold"},
			{title: "Italic", icon: "italic", format: "italic"},
			{title: "Underline", icon: "underline", format: "underline"},
			{title: "Strikethrough", icon: "strikethrough", format: "strikethrough"},
			{title: "Superscript", icon: "superscript", format: "superscript"},
			{title: "Subscript", icon: "subscript", format: "subscript"},
			{title: "Code", icon: "code", format: "code"}
		]},
		{title: "Blocks", items: [
			{title: "Paragraph", format: "p"},
			{title: "Blockquote", format: "blockquote"},
			{title: "Div", format: "div"},
			{title: "Pre", format: "pre"}
		]},
		{title: "Alignment", items: [
			{title: "Left", icon: "alignleft", format: "alignleft"},
			{title: "Center", icon: "aligncenter", format: "aligncenter"},
			{title: "Right", icon: "alignright", format: "alignright"},
			{title: "Justify", icon: "alignjustify", format: "alignjustify"}
		]}
	],
    branding: false
});


$(document).ready(function(){
    $("#poster").click(function() {
        var content =  tinymce.get("editor1").getContent();
        var name=  $("#name").val();
		console.log(content);
		rubrique = {
			id : (new Date()).getTime(),
			name : name,
			description : content
		}; 
		a = [];
		// Parse the serialized data back into an aray of objects
		a = JSON.parse(localStorage.getItem("rubriques")) ||  [];
		// Push the new data (whether it be an object or anything else) onto the array
		a.push(rubrique);
		// Alert the array value
		// Re-serialize the array back into a string and store it in localStorage
		localStorage.setItem("rubriques", JSON.stringify(a));
		location.reload();
    })
    
})
createTable();
function createTable() {
	const json = localStorage.getItem("rubriques");
	const obj = JSON.parse(json);
	console.log(obj);
  if(json != null) {
	for (var i = 0; i < obj.length; i++) {
	  var newTr = document.createElement("tr");
	  newTr.ir = i;
	  var newTd1 = document.createElement("td");
	  var newTd2 = document.createElement("td");
	  var newButton = document.createElement("button");
	  var newButton2 = document.createElement("button");
	  newButton.className = "but btn btn-primary";
	  newButton2.className = "but btn btn-primary";
	   newTd1.innerHTML = obj[i].name
	   

	//  newTd2.innerHTML = JSON.stringify(obj[i].description).replace(/"([^"]+)":/g, '$1:');


	  newTd2.appendChild(newButton);
	  newTd2.appendChild(newButton2);
  
	  newButton.innerHTML = "supprimer";
	  newButton.id = obj[i].id
	  newButton2.innerHTML = "preview";
	  newButton2.id = obj[i].id
  
	  newTr.appendChild(newTd1);
	  newTr.appendChild(newTd2)
	  document.getElementById("tbody").appendChild(newTr);
  
	  //newTd.appendChild(newTr2);
	  //newTd.appendChild(newTr3);
	}
  }
}
function cleanIt(obj) {
    var cleaned = JSON.stringify(obj, null, 2);

    return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
	
        return match.replace(/"/g, "");
    });
}
$(document).ready(function() {
	$("button").click(function() {
	  var button = $(this).html();
	  if(button ==  "supprimer"){
		alert(button);
		const stands = JSON.parse(localStorage.getItem('rubriques'));
		const filtered = stands.filter(stand => stand.id != $(this).attr('id'));
		localStorage.setItem('rubriques', JSON.stringify(filtered));
		location.reload();
	  }
	})
});

$(document).ready(function() {
	$("button").click(function() {
	  var button = $(this).html();
	  if(button ==  "preview"){
		const rubriques = JSON.parse(localStorage.getItem('rubriques'));
		const rubrique = rubriques.filter(rubrique => rubrique.id == $(this).attr('id'));
		alert(rubrique[0]);		
		$("#preview").html(rubrique[0].description);

	  }
	})
});