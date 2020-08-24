var ToTop = document.getElementById("ToTop");

document.body.addEventListener('scroll', function (e) {
	checkScroll();
});

function checkScroll() {
  if (document.body.scrollTop > 99 || document.documentElement.scrollTop > 99) {
    ToTop.style.display = "block";
  } else {
    ToTop.style.display = "none";
  }
}

function scrollUp() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome Firefox IE Opera
}