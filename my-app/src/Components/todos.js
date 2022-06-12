import React, {useState} from 'react';
import AddTodo from "./addtodo"
import Todo from "./todo"

function Todos(props) { 

    const [addTodoValue,setaddTodoValue] = useState("")
    const [todos,settodos] = useState([
    ])
    const [filtered,setfiltered] = useState([
    ])
    const [filteredactive,setfilteredactive] = useState([
        
    ])
    const [filtersposition,setfiltersposition] = useState({
            allf : true,
            activef : false,
            completedf : false,
    })
    const [countactive,setcountactive] = useState(0)

    const getTime= () => {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    const handleDelete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            return t.id !== todo
        });

        activelist = newList.filter((t) => {
            return !t.isDone 
        });
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(activelist)

    }
    const clearcomplete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            return !t.isDone
        });
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(newList)
    }
    const filteractive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            if(t.isDone==true){
                return t.id 
            }
            
        });
        setfiltered(newList)
    }
    const filternotactive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        setfiltered(newList)
    }
    const filterall = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
                return t.id 
            
        });
        setfiltered(newList)
    }

    const handleDone = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = [...todos];
        newList = currentTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        setfiltered(newList)
        setfilteredactive(activelist)
    }

    const addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        if (value) {
            currentTodos = [...todos];
            currentTodos.push(
                {
                    id: getTime(),
                    value: value,
                    isDone: false
                }
            );
            newList =  currentTodos.filter((t) => {
                return t.id 
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });
        setaddTodoValue("")
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(activelist)
        } else {
            console.log("Please Add Todo Text");
        }
    }

    const setUpdate= (text,key) => {{
        let currentTodos = [];
        currentTodos = todos;
        currentTodos.map(t =>{
            if(t.id==key){
                t.value=text;
            }
        });
        settodos(currentTodos)
        setfiltered(currentTodos)
    }}

    const checkall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = todos;
        for (const i of currentTodos) {
            i.isDone=true;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        setfiltered(currentTodos)
        settodos(currentTodos)
        setfilteredactive(activelist)
    }}
    const uncheckall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = todos;
        for (const i of currentTodos) {
            i.isDone=false;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        setfiltered(currentTodos)
        settodos(currentTodos)
        setfilteredactive(activelist)
    }}

    const lenleftitems=()=>{{
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList =  todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        setcountactive(newList.length)
        
    }}
    const clearcompi=()=>{{
        let activetodo = [];
        let total_todos= [];
        activetodo = filteredactive;
        total_todos = todos;
        if ((total_todos.length-activetodo.length)>=1){
            return <label  onClick={() => clearcomplete()}>Clear completed</label>
        }
    }}
    const checkforactiv=()=>{{
        let activetodo = [];
        let total_todos= [];
        total_todos = todos;
        activetodo = filteredactive;
        if (activetodo.length==0 && total_todos.length!=0 ){
                return true
        }
        else{
                return false
        }
    }}
    const clicktrue=(sts)=>{{
        if(sts==1){
            filtersposition.allf=true;
            filtersposition.activef=false;
            filtersposition.completedf=false;
        }
        else if(sts==2){
            filtersposition.allf=false;
            filtersposition.activef=true;
            filtersposition.completedf=false;
        }
        else{
            filtersposition.allf=false;
            filtersposition.activef=false;
            filtersposition.completedf=true;
        }
    
    }}
    const renderallbtn=()=>{{
        if(filtersposition.allf){
            return <label className='allbtn' onClick={() => {filterall();clicktrue(1)}}>All</label>
        }
        else{
            return <label className='allbtn2' onClick={() => {filterall();clicktrue(1)}}>All</label>
        }
    }}
    const renderactivebtn=()=>{{
        if(filtersposition.activef){
            return <label className='allbtn' onClick={() =>{filternotactive();clicktrue(2)}}>Active</label>
        }
        else{
            return <label className='allbtn2' onClick={() =>{filternotactive();clicktrue(2)}}>Active</label>
        }
    }}
    const rendercompletedbtn=()=>{{
        if(filtersposition.completedf){
            return <label className='allbtn' onClick={() =>{filteractive();clicktrue(3)}}>Completed</label>
        }
        else{
            return <label className='allbtn2' onClick={() => {filteractive();clicktrue(3)}}>Completed</label>
        }
    }}
    const renderfooter=()=>{{
        let total_todos= [];
        total_todos = todos;
        if(total_todos.length>=1){
            return(<div className='whole-footer'>
            <div className='decor-outer'>
            <div className='footer'>
                <div className='left_footer'>
                <label >{filteredactive.length} items left </label>
                </div>
                <div className='middle_footer'>
                    {renderallbtn()}
                    {renderactivebtn()}
                    {rendercompletedbtn()}
                </div>
                <div className='right_footer'>
                    {
                        clearcompi()
                    }
                
                </div>
                
            </div>
            </div>
            
                    <div className='decor1'></div>
                    <div className='decor2'></div>
            </div>
        )}
    }}
    

    
    return (
        <div className='table_style'>
        <div className="table">
                <div className='todos_table'>
                    <div className="txt1table">
                        <AddTodo fooAddTodo={addNewTodo} addTodoValue={addTodoValue} checkall={checkall} uncheckall={uncheckall} chkforactv={checkforactiv}/>
                    </div>
                </div>

                    
                <div className='footerandtable'>
                    {filtered.map((todo, index) => (
                    <div className='todos_table_down' key={todo.id}>
                        <Todo index={index+1} todo={todo} 
                        fooDelete={handleDelete} 
                        fooDoneDone={handleDone} 
                        setUpdate={setUpdate} 
                            />
                    </div>
                    
                ))}
        </div>
        {
            renderfooter()
        }
        </div>
        
        
    </div>
        
    );
    
}

export default Todos;