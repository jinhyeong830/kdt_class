//4.나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
	var answer = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % divisor === 0) answer.push(arr[i]);
	}
	//arr정렬-선택정렬--> .sort() 메소드 사용하면 됨

	for (let i = 0; i < answer.length - 1; i++) {
		let tmp = 0; //교체를 위한 빈 변수
		for (let j = i + 1; j < answer.length; j++) {
			if (answer[i] > answer[j]) {
				//두 수 교체
				tmp = answer[i];
				answer[i] = answer[j];
				answer[j] = tmp;
			}
		}
	}
	if (answer.length === 0) answer.push(-1);
	return answer;
}
