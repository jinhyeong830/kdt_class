//2.자릿수 더하기
function solution(n) {
	var answer = 0;
	while (n !== 0) {
		answer += n % 10;
		n = parseInt(n / 10); //js는 int선언하는게아니니까 따로 parseInt를 해줘야 함!!
	}

	return answer;
}
