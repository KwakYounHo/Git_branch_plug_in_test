const props = {
  'style.color' : 'black',
  'style.background color' : 'white',
  '감각' : '익힌다 = 반복한다',
  '책' : '이해하는 방법은 자주보고 계속 보는 것'
}

const a = {
  'style.color' : '',
  'style.background color' : '',
  '감각' : '',
  '책' : '',
  '목' : '아픔',
  '배' : '고픔'
}

// Object.keys(a).forEach(function(property) {
//   a[property] = props[property];
// })



// Object.keys(props).forEach(function(property) {
//   a[property] = props[property];
// })

const change = {
  'innerText' : '안녕하세요'
}

const styleChange = {
  'width' : '500px',
  'height' : '500px',
  'backgroundColor' : 'aqua'
}

const test_p = document.createElement('p');
document.body.appendChild(test_p);


Object.keys(change).forEach(function (keys) {
  test_p[keys] = change[keys];
})

Object.keys(styleChange).forEach(function (key) {
  test_p.style[key] = styleChange[key];
})

console.dir(test_p);


const A = ['가', '나', '다', '라', '마', '바', '사']
console.log(...A);
console.log([...A]);
console.log([{...A}]);


const glovalValue = 1000;
function outerFunc() {
  let outerLocalValue = 100;
  function innerFunc() {
    let innerLocalValue = 30;
    return innerLocalValue;
  }
  // console.log(innerLocalValue);
  return glovalValue + outerLocalValue + innerLocalValue;
}
console.log(outerFunc());
console.log('이 글은 수정 되었습니다. 브랜치 테스트를 위하여');