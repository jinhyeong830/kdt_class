const frame = document.querySelector("section");
const list = frame.querySelectorAll("article"); //list는 article을 가지고 있는 유사배열같은 거.. 배열은 아님
const len = list.length; //list가 몇개인지
const deg = 360 / len; //45deg 계산할 필요 없이 상수로 설정해줌

const names = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];
for (let i = 0; i < len; i++) {
	list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

	//순서대로 사진 음악 넣기
	const pic = list[i].querySelector(".pic");
	pic.style.backgroundImage = `url(../img/${names[i]}.jpg)`;

	//음악넣기
	const audio = document.createElement("audio");
	audio.setAttribute("src", `../music/${names[i]}.mp3`);
	audio.setAttribute("loop", "loop");

	list[i].append(audio);
	//title insert
	const title = list[i].querySelector(".text>h2");
	title.innerHTML = `${names[i]}`;
}

//
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0; //몇번 돌리는지 저장하는 변수
let active = 0;

prev.addEventListener("click", function (e) {
	frame.style.transform = `rotate(${deg * ++num}deg)`;

	if (active === 0) {
		active = len - 1;
	} else {
		active = active - 1;
	}

	for (let el of list) {
		el.classList.remove("on"); //일단 다 지움
	}
	list[active].classList.add("on");
});

next.addEventListener("click", function (e) {
	frame.style.transform = `rotate(${deg * --num}deg)`;

	if (active === len - 1) {
		active = 0;
	} else {
		active = active + 1;
	}
	for (let el of list) {
		el.classList.remove("on");
	}
	list[active].classList.add("on");
});
let before = -1;

// play
// for- of 문
for (let el of list) {
	//list배열을 끝까지 돌면서 for문을 실행하겠다는 의미
	const play = el.querySelector(".play");
	const pause = el.querySelector(".pause");
	const load = el.querySelector(".reload");

	//매개변수로 event객체를 던져줘야함 어디서 클릭되었는지를 알아야 하기 때문.
	play.addEventListener("click", function (e) {
		// 다른패널에서 노래 안나오도록
		if (before === -1) {
			//초기값일 때
			before = e.currentTarget;
		} else if (e.currentTarget !== before) {
			before.closest("article").querySelector("audio").pause();
			before.closest("article").querySelector(".pic").classList.remove("on");
			before = e.currentTarget;
		}

		//closest method:버튼이 클릭된 요소 중에 가장 가까운 아티클인 요소를 찾아주는 것
		// 가장 가까운 부모요소를 찾을 때 많이 씀
		e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
		// 클릭이 되면 가장 가까운 article의 pic클래스에 on클래스를 추가해주거라-라는 의미
		e.currentTarget.closest("article").querySelector("audio").play();
	});
	pause.addEventListener("click", (e) => {
		e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");

		e.currentTarget.closest("article").querySelector("audio").pause();
	});

	load.addEventListener("click", function (e) {
		if (before === -1) {
			//초기값
			before = e.currentTarget;
		} else if (e.currentTarget !== before) {
			before.closest("article").querySelector("audio").pause();
			before.closest("article").querySelector(".pic").classList.remove("on");
		}

		e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
		e.currentTarget.closest("article").querySelector("audio").load();
		e.currentTarget.closest("article").querySelector("audio").play();
		before = e.currentTarget;
	});
}
