function addStudent() {

    const number = document.getElementById("studentNumber").value;
    const name = document.getElementById("studentName").value;

    if(number === "" || name === ""){
        alert("학번과 이름을 입력하세요.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = number + " - " + name;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentNumber").value = "";
    document.getElementById("studentName").value = "";

}