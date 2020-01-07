// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A+B를 출력한다.


const a = parseInt(prompt('1 ~ 9 사이의 숫자를 입력해주세요.'));
const b = parseInt(prompt('1 ~ 9 사이의 숫자를 입력해주세요.'));

function add(a, b) {
    return a + b
}

if(0 < a && a < 10 && 0 < b && b < 10) {
    add(a, b)

    console.log(a, b)
    console.log(add(a, b))
} else{
    alert('숫자를 다시 입력해주세요 !')
}

