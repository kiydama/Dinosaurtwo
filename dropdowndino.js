
document.querySelector("form")
.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default action
  var select = this.querySelector("select");
  if (select.value !== "0") {
    location.href = select.value;
  }
})