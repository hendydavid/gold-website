console.log("hello");
var acc = document.getElementsByClassName("accordion");



for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-acc");
    this.nextElementSibling.classList.toggle("active");
  });
}
