var container = document.querySelector(".container");
var bookContainer = document.querySelector(".book-container");
var addContainer = document.querySelector(".add-container");
var box = document.querySelector(".popup-overlay");

//Show the add book popup

var addBtn = document.querySelector("#add-popup-button");
addBtn.addEventListener("click", function () {
  addContainer.style.display = "block";
  box.style.display = "block";
});
//To go back to booksky page without any modifications
var closePopUp = document.querySelector("#cancel-popup");
closePopUp.addEventListener("click", function (event) {
  event.preventDefault();
  addContainer.style.display = "none";
  box.style.display = "none";
});

function del(event) {
  event.target.parentElement.remove();
}

var bookTitle = document.getElementById("book-title");
var bookAuthor = document.getElementById("book-author");
var description = document.getElementById("description");

//to add the user inpurt content to booksky page

var addContent = document.getElementById("add-book");
addContent.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  //div.className = "book-container";//<div class="book-container"></div>
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h1>${bookTitle.value}</h1>
  <h5>${bookAuthor.value}</h5>
  <p>${description.value}</p>
  <button onclick="del(event)" class="delBtn">Delete</button>`;

  container.insertAdjacentElement("beforeend", div);
  addContainer.style.display = "none";
  box.style.display = "none";
});
/*
  //book title
  var title = document.createElement("h1");
  title.textContent = bookTitle;
  //append h1 to div
  div.insertAdjacentElement("beforeend", title);

  //book author
  var author = document.createElement("h5");
  author.textContent = bookAuthor;
  //append h5 to div
  div.insertAdjacentElement("beforeend", author);

  //About book
  var about = document.createElement("p");
  about.textContent = description;
  //append p to div
  div.insertAdjacentElement("beforeend", about);

  var btn = document.createElement("button");
  btn.textContent = "delete";
  btn.onclick = del;
  div.insertAdjacentElement("beforeend", btn);

*/
