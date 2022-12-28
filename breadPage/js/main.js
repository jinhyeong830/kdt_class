//로그인 창 띄우기
const loginTxt = document.querySelector(".register .register__login");
const loginTxtHide = document.querySelector(
	".with_reaction--regi .register__login"
);
const loginWindow = document.querySelector(".login");
const logoImg = document.querySelector(".logo img");
const xMark = document.querySelector(".x");

loginTxtHide.addEventListener("click", function () {
	console.log("!");
	if (loginWindow.classList.contains("hide")) {
		loginWindow.classList.remove("hide");
	} else {
		loginWindow.classList.add("hide");
	}

	if (logoImg.classList.contains("hide")) {
		logoImg.classList.remove("hide");
	} else {
		logoImg.classList.add("hide");
	}
});

loginTxt.addEventListener("click", function () {
	console.log("!");
	if (loginWindow.classList.contains("hide")) {
		loginWindow.classList.remove("hide");
	} else {
		loginWindow.classList.add("hide");
	}

	if (logoImg.classList.contains("hide")) {
		logoImg.classList.remove("hide");
	} else {
		logoImg.classList.add("hide");
	}
});

xMark.addEventListener("click", function () {
	loginWindow.classList.add("hide");
	logoImg.classList.remove("hide");
});

function noInfo() {
	alert("로그인 정보가 없습니다!");
}

function findPW() {
	let prom = prompt("ID는 무엇인가요?");
	if (prom !== null) {
		alert("ID가 존재하지 않습니다");
	}
}

//반응형
const reactionBar = document.querySelector(".burger_menu");
const reactionContent = document.querySelector(".small_menu");

reactionBar.addEventListener("click", function () {
	if (reactionContent.classList.contains("hide")) {
		reactionContent.classList.remove("hide");
	} else {
		reactionContent.classList.add("hide");
	}
});
