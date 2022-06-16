const intialData = {
    list: [

    ]
}
const todoReducers = (state=intialData, actions) => {
    switch(actions.type){
        case "Add_Todo":
            const{id,data} = actions.payload;

            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            
        default: return state;
    }

}

export default todoReducers;