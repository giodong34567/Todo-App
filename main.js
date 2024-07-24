const inputBox = document.getElementById("input-box");
const btn = document.getElementById("btn");
const listTemp = document.getElementsByClassName("list");
const list = listTemp[0];

btn.addEventListener("click", () => {
    var liContent = inputBox.value;
    if (liContent.toString() == "") {
        alert("Bạn phải nhập việc cần làm");
    }
    else {
        var newLi = document.createElement("li");
        newLi.className = "item";
        newLi.innerHTML = liContent;

        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "item-span";

        newLi.appendChild(span);

    }
    list.appendChild(newLi);
    saveData();
})

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}



function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();