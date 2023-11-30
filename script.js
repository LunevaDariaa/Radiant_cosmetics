const feedback = document.querySelector("#feedback");
const sendBtn = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
sendBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log(feedback.value);
  let msg = feedback.value;
  console.log(msg);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closeFN();
});

const closeFN = closeBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  feedback.value = "";
});
