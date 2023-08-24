
import React,{useState} from 'react';
//useState를 사용하기 위함
import './App.css';
import TodoBoard from './component/TodoBoard';
import TodoItem from './component/TodoItem';
//todoboard를 들고 오겠습니다.


function App() {
    const[inputValue,setInputValue]=useState('')
    const[todoList,setTodoList]=useState([])
    // state 선언
    const addItem = () => {
    	console.log("im here", inputValue)
        setTodoList([...todoList, inputValue])
        //기존에 있는 아이템은 유지를 하되, 새로운 inputValue를 넣어주세요 
    }
    
    return (
        <main>
            <input value= {inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
          
            <button onClick = {addItem}>추가</button>
            
    
        <TodoBoard todoList={todoList}/>
       
        </main>
        );
        
    }
    export default App;