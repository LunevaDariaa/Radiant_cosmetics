const feedback = document.querySelector("#feedback");
const sendBtn = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const reviews = document.querySelector(".reviews");

sendBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log(feedback.value);
  let msg = feedback.value;

  //Create and push new review into review field
  const newReview = `<div class="review">
  <p class="rating">⭐⭐⭐⭐⭐ (5 stars)</p>
  <p class="feedback">
    " ${msg}"
  </p>
  <p class="author">Lisa N.</p>
  <button class="like-button">&heartsuit;</button>
  <span class="like-count">1 like</span>
</div>`;
  reviews.insertAdjacentHTML("afterbegin", newReview);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closeFN();
});

const closeFN = closeBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  feedback.value = "";
});
