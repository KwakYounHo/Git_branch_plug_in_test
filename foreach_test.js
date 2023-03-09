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
  'innerText' : '안녕하세요',
  'style.width' : '500px',
  'style.height' : '500px',
  'style.backgroundColor' : 'aqua'
}

const test_p = document.createElement('p');
document.body.appendChild(test_p);


Object.keys(change).forEach(function (keys) {
  test_p[keys] = change[keys];
})

console.dir(test_p);