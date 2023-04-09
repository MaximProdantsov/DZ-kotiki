const addFormBtn = document.querySelector(".addFormBtn");
const closeFormBtn = document.querySelector(".closeFormBtn");
const popUp = document.querySelector(".popUp");



addFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);


function closeForm() {
  popUp.classList.remove("active");
}

function openForm() {
  popUp.classList.add("active");
}