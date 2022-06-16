import React ,{useState}from 'react'

const Test1l = () => {  
    const [addTodoValue,setaddTodoValue] = useState("")
    const [todos,settodos] = useState([
        {
            id: 1,
            value: "todo 1",
            isDone: false
        },
        {
            id: 2,
            value: "todo 2",
            isDone: true
        },
        {
            id: 3,
            value: "todo 3",
            isDone: false
        }
    ])
    const [filtered,setfiltered] = useState([])
    const [filteredactive,setfilteredactive] = useState([])
    const [filtersposition,setfiltersposition] = useState({
            allf : true,
            activef : false,
            completedf : false,
    })
    const [countactive,setcountactive] = useState(0)

    const checkstate1=()=>{
        let currentTodos = [];
        currentTodos = todos
        console.log(currentTodos)
    }


    return (

        <><div onClick={checkstate1}>test1</div>
        

        </>

    )
}


export default Test1l;