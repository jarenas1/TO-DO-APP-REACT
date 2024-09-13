export const todoReducer = (initialState = [], action) =>{

    //CASOS DE USO EN ACTION
    switch(action.type){
        case "[TODO] Add Todo":
            return [...initialState, action.payload]
            throw new Error("ABC is not implemented");

        default:
            return initialState;
    }
}