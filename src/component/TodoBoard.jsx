//TodoBoard 컴포넌트 만들기
import React from "react";
import TodoItem from "./TodoItem";
//리액트 불러오기
function TodoBoard(props) {
    
    return(
        <div className="">
                <h1>Todo List</h1>
                {props.todoList.map((item)=><TodoItem item={item}/>)}
               
        </div>
    )

}  
export default TodoBoard
//TodoBoard를 수출하기
