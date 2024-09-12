export const todoReducer = (initialState = [], action) =>{

    //CASOS DE USO EN ACTION
    switch(action.type){
        case "ABC":
            throw new Error("ABC is not implemented");

        default:
            return initialState;
    }
}