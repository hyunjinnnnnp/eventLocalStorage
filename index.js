const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text); //로컬스토리지에 저장해
}

function handleSubmit(event) {
  //bubble 이벤트 디폴트 동작 멈추기   --- 엔터치면 어딘가로 사라지는 동작
  event.preventDefault();
  const currentValue = input.value;
  //console.log(currentValue);
  paintGreeting(currentValue); //아직 네임 불러오기는 가능하지만 저장은 못함
  saveName(currentValue); //로컬스토리지에 저장해라
}

//*********겟 아이템 - 지우는 펑션 만들면 로그아웃도 만들 수 있을 듯??

function askForName() {
  form.classList.add(SHOWING_CN); //아직 로컬스토리지에 저장못함
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  //인자는 텍스트만 받을 거야
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //없어
    askForName();
  } else {
    //있을 때
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
