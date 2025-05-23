// HTML에서 id가 "call"인 버튼을 가져옴
let button = document.getElementById("call");

// id가 "response"인 div를 가져옴 → 여기에 결과를 표시할 거야
let responseDiv = document.getElementById("response");

// 버튼에 "클릭하면 함수 실행하라"는 이벤트 등록
button.addEventListener("click", () => {
  // fetch() 함수: 서버에 요청 보내는 함수 (비동기)
  fetch("http://localhost:8080/hello")  // Spring 서버의 /hello API로 요청
    .then(res => res.text())            // 응답을 '텍스트' 형식으로 받음
    .then(data => {
      // 받아온 데이터를 화면에 보여줌
      responseDiv.innerText = data;     // "Hello from Spring!" 출력됨
    })
    .catch(err => {
      // 오류가 발생했을 때 표시
      responseDiv.innerText = "에러 발생: " + err;
    });
});
