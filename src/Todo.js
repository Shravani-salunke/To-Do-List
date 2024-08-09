import React,{useState}from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Todo=() =>{
    const[initial,setInitial]=useState();
    const [data,setData]=useState([])
    const getInput=(event) =>{
        console.log(event.target.value);
        setInitial(event.target.value)
    }
    const getData=()=>{
        console.log(initial);
        let store=[...data,initial]
        setData(store)
        setInitial("")
    }
  const deleteTask=(index)=>{
    console.log(index);
    let filterData = data.filter((curElem,id)=>{
  return id!=index
    })
    setData(filterData)
  }
  return (

    <div className='container'>
        <div className='inputTask'>
            <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInput}/>
            <button onClick={getData}>Add</button>
        </div>
        {data.map((curVal,index)=>{
            return(
                <>
                <div className='taskData'>
                    <p>{curVal}</p>
                    <FontAwesomeIcon icon={faTrash} id='deleteIcon' onClick={()=>deleteTask(index)} />
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Todo
