function addBoard() {
    const title = document.getElementById("boardTitle").value;
    const content = document.getElementById("boardContent").value;
    const boardList = document.getElementById("boardList");

    if (title === "" || content === "") {
        alert("제목과 내용을 모두 입력하세요.");
        return;
    }

    const article = document.createElement("article");

    const titleElement = document.createElement("h4");
    titleElement.textContent = title;

    const contentElement = document.createElement("p");
    contentElement.textContent = content;

    article.appendChild(titleElement);
    article.appendChild(contentElement);

    boardList.appendChild(article);

    document.getElementById("boardTitle").value = "";
    document.getElementById("boardContent").value = "";
}