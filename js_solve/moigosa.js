function solution(answers) {
	var answer = []; //includes?
	return answer;
	let supo1 = [];
	let supo2 = [];
	let supo3 = [];

	for (let i = 0; i < answers.length; i++) {
		switch (i % 5) {
			case 0:
				supo1[i] = 0;
			case 1:
				supo1[i] = 1;
				break;
			case 2:
				supo1[i] = 2;
				break;
			case 3:
				supo1[i] = 3;
				break;
			case 4:
				supo1[i] = 4;
		}
	}
}
/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 */
