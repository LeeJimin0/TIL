// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A-B를 출력한다.

const a = Number(prompt("1 ~ 9 사이의 숫자를 입력해주세요."));
const b = Number(prompt("1 ~ 9 사이의 숫자를 입력해주세요."));

function sub(a, b) {
    return a - b
}

if(a > 0 && a < 10 && b > 0 && b < 10) {
    console.log(a, b)
    console.log(sub(a, b))
} else {
    alert("범위 안의 숫자가 아닙니다 ! ")
}