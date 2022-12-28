
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent="hello";
// todos.lastElementChild.innerHTML='<h1>hello</h1>';

//변수 선언

//ul 선택자 변수에 담아주기
const todos=document.querySelector("#todo_list");

const button=document.querySelector(".submit");
const todoInput=document.querySelector("#todo_input");
const msg=document.querySelector("#msg");


button.addEventListener("click", onSubmit); //익명함수 대신 선언해둔 함수 이름 대입해도 ㅇㅋ
function onSubmit(e){
    e.preventDefault();//기본적으로 일어나야 하는 이벤트 방지

    if(todoInput.value==="") {
        msg.style.display="block";
        setTimeout(()=>msg.style.display='none',2000);
        return;
    }
    e.target.style.background="red";
    
    const li=document.createElement("li");//li를 생성하는 메소드 
    li.appendChild(document.createTextNode(todoInput.value)); //li에 글자 추가
    li.classList.add("item");
    todos.appendChild(li);//변수 li를 #todoInput의 자식으로 추가

    todoInput.value='';//클릭후 input창 내용 초기화
    

}