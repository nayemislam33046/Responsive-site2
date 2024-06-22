export const reducer = (state,action)=>{
    switch (action.type) {
        case "Darkmode":
            return{
                ...state,
                Darkmode:true
                
            }
        case "Lightmode":
            return{
                ...state,
                Darkmode:false
            }
            
    
        default:
            return state
    }
}