import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
	const value = document.querySelector(".price")
	document.querySelectorAll(".product").forEach(x => {
		x.setAttribute("data-price", value.innerHTML)
	})
});
