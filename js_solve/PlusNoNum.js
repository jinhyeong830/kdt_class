//3. 없는 숫자 더하기
function solution(numbers) {
	let dif = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let different = dif.filter((num1) => !numbers.includes(num1));
	let sum = 0;
	different.forEach(function (num) {
		sum += num;
	});
	return sum;
}
