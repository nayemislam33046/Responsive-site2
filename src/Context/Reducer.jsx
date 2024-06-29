export const reducer = (state,action)=>{
    switch (action.type) {
        case "DARKMODE":
        return{
            ...state,
            Darkmode:true
        }
        case "LIGHTMODE":
        return{
            ...state,
            Darkmode:false
        }
        default:
            return state
    }
}