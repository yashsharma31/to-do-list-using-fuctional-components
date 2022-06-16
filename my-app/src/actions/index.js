export const addTodo = (data) =>{
    return {
        type :"Add_Todo",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo = () =>{
    return {
        type :"Delete_Todo"
    }
}
