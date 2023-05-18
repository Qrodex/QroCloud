
function saveFile() {
    let file = document.getElementById("file").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            let files = JSON.parse(localStorage.getItem("files")) || [];
            let fileData = {
                name: file.name,
                type: file.type,
                data: event.target.result
            };
            files.push(fileData);
            localStorage.setItem("files", JSON.stringify(files));
            displayFiles();
            alert("File saved to local storage.");
        }
    }
}

function displayFiles() {
    let files = JSON.parse(localStorage.getItem("files")) || [];
    let list = document.getElementById("fileList");
    list.innerHTML = "";
    files.forEach(function (fileData) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = "textstyle3";
        a.href = fileData.data;
        a.download = fileData.name;
        a.innerHTML = fileData.name;
        li.appendChild(a);
        list.appendChild(li);
    });
}

function clearFiles() {
    localStorage.removeItem("files");
    displayFiles();
    alert("All files removed from local storage.");
}

displayFiles();
