const intialData = {
    list: [{
        id:1,
        value:"test1",
        isDone:false,
    },
    {
        id:2,
        value:"test2",
        isDone:true,
    },
    {
        id:3,
        value:"test3",
        isDone:true,
    }

    ]
}
const todoReducers = (state=intialData, actions) => {
    
    switch(actions.type){
        case "Add_Todo":
            const{id,value,isDone} = actions.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        value:value,
                        isDone:isDone
                    }
                ]
            }
        case "Delete_Todo":
            const newlist = state.list.filter((t) => t.id !== actions.payload.id)
            return {
                ...state,
                list:newlist
            }
            

        case "Update_Todo":
            let currentTodos = [];
            currentTodos = state.list;
            const new2ndlist=currentTodos.map(t =>{
                if(t.id==actions.payload.id){
                    t.value=actions.payload.value;
                }
                return t
                });
            return {
                ...state,
                list:new2ndlist
            }
        case "Change_tf_state":
            let oldTodos = [];
            oldTodos = state.list;
            const newList = oldTodos.map((t) => {
                if (t.id === actions.payload.id) {
                    t.isDone = !t.isDone;
                }
                return t
            });
            console.log(newList)
            return {
                ...state,
                list:newList
            }

            
        default: return state;
    }
    

}

export default todoReducers;