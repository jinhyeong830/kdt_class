const snbMenu = document.querySelector("#sub .sub_menu");
const snbBtn = document.querySelector("#sub .btn_menu");

snbBtn.addEventListener("click", function () {
	if (snbMenu.classList.contains("hide")) {
		snbMenu.classList.remove("hide");
	} else {
		snbMenu.classList.add("hide");
	}
});
