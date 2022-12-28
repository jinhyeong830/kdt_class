//1. 번호 ->**8334

let r = "4541114";

function solution(phone_number) {
	if ([...phone_number].length === 4) {
		//길이가 4일 때 따로 처리
		return phone_number;
	} else {
		[...phone_number].forEach(function (number, index, arr) {
			if (index < phone_number.length - 4) {
				arr[index] = "*";
				phone_number = arr;
			}
		});
		let str = phone_number.join(""); //배열->string
		return str;
	}
}

console.log(solution(r));
//1. 번호 ->** 다른방법
//split으로 쓰면 됨
