import React, { useState } from 'react';
import "./style.css"
import check1 from "../assets/check.png"
import uncheck1 from "../assets/uncheck.png"
import clossee from "../assets/close.png"
function Todo(props){
    const [val,setval] = useState(props.todo.value)
    const [isInEditMode,setisInEditMode] = useState(false)

    const renderdeletebtn = () =>{
        return <img src= {clossee} width={12} onClick={() =>props.fooDelete(props.todo.id)}></img>
    }

    const renderchkbox = () =>{
        if(props.todo.isDone){
        return <img src= {check1} width={30} onClick={() => props.fooDoneDone(props.todo)}></img>;
        }
        else{
        return <img src= {uncheck1} width={30} onClick={() => props.fooDoneDone(props.todo)}></img>;
        }
    }

    const changeEditMode =()=>{
        setisInEditMode(!isInEditMode)
    }

    const handleChange = (e) => {
        setval(e.target.value)
    }

    const renderEditView = (id) =>{
        return <div>
            <input
            type="text"
            defaultValue={val}
            onChange={handleChange}
            onKeyPress={event => event.key === 'Enter' && updateComponentValue(id)}
            />
        </div>
    }

    const renderDefaultView= () =>{
        return <div onDoubleClick={changeEditMode}>
                    {props.todo.value}
                </div>
    }


    const renderTodo= () =>{
        if(props.todo.isDone)
        return <s className='linecutted'>{isInEditMode ? 
        renderEditView(props.todo.id):
        renderDefaultView()
        }</s>;

        else
        return isInEditMode ? 
        renderEditView(props.todo.id):
        renderDefaultView()
        }
    
    const updateComponentValue = (id) =>{
        setisInEditMode(false)
        props.setUpdate(val,id)
    }


        return (
            <>
            <div className='tableitself'>
                <div  className="tab1">
                    {
                        renderchkbox()
                    }
                </div>
                <div className='tab2'>
                    {
                        
                        renderTodo()
                    }
                    
                </div>
                <div  className="tab3">
                    {
                        renderdeletebtn()
                }
                    
                </div>
                </div>
                
            </>
            
        );
    
    }
export default Todo;