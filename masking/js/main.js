const main = document.querySelector("main");
const btns = main.querySelectorAll("#nav li"); //li누르면 배경 바뀌게 할테니까
const btnsLen = btns.length;

//이전에 선택되었던 애 처리하는 변수 before
let before = -1;
const panels = main.querySelectorAll("section article");

for (let i = 0; i < btnsLen; i++) {
	btns[i].addEventListener("click", function () {
		//처음 클릭됐을 때가 before-1인 상태
		if (before === -1 && i !== 0) {
			before = i;
			btns[0].classList.remove("on");
			btns[i].classList.add("on");

			panels[0].classList.remove("lower");
			panels[i].classList.add("maske");

			setTimeout(() => {
				panels[0].classList.remove("mask");
				panels[0].classList.remove("on");
				panels[i].classList.remove("lower");

				panels[i].classList.add("on");
			}, 1400);
		} else if (before !== i) {
			//선택한 걸 또 선택하지 않았을 때의 경우
			btns[before].classList.remove("on");
			btns[i].classList.add("on");

			panels[before].classList.add("mask");
			panels[i].classList.add("lower");

			setTimeout(() => {
				panels[before].classList.remove("mask");
				panels[before].classList.remove("on");
				panels[i].classList.remove("lower");
				panels[i].classList.add("on");
				before = i;
			}, 1400);
		}
	});
}
