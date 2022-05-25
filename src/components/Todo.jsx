import React,{useState} from 'react';
import {v4}  from 'uuid';
import Input from './Input';
import styles from "./todo.module.css";



const Todo = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);
    
    const onHandle = () =>{
        if(value!=""){
            setTodo([...todo,{id:v4(),value:value,isCompleted:false}]);
            setValue("");
        }else{
            alert("please write todo!")
        }
    }

  return (
    <div>
      <p>Todo</p>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={onHandle}>+</button>
      <div className={styles.box}>
        { 
          todo.map((el)=>(
            //   console.log(el),
              <Input el={el.value} key={el.id} />
          ))
        }

        <div>
          <p></p>
        </div>

      </div>
      
    </div>
  )
}

export default Todo;
