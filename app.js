// alert("Assalomu alyekum Hurmatli foydalanuvchi");
const hideBtn = document.querySelector(".hide");
const onhideBtn = document.querySelector(".on-hide");
const title = document.querySelector(".title");
var count = 0;

hideBtn.addEventListener("click", (e) => {
  count = 1;
  if (count == 1) {
    title.style.displey = "none";
    hideBtn.textContent = "No hide";
  } else {
    title.style.displey = "block";
    hideBtn.textContent = "Hide";
  }
});
