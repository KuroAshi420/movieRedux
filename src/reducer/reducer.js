const initialState = { item : []}

export default function reducer (state=initialState, action){
    switch (action.type){
        case "Add_MOVIE" :
            return {item:[...state.item,action.payload]}
        case "DELETE_MOVIE" :
            return {item : state.item.filter((el,index)=> (el.id!==action.payload))}
        case "SEARCH_MOVIE" :
            return {item : state.item.filter((el, index) => (el.name === action.payload||el.date === action.payload ) && el)}
        case "SEARCH_RATING" :
            return {item : state.item.filter((el, index) => (action.payload <=el.rating) && el)}
        case "EDIT_MOVIE" :
            return {item : state.item.map((el,index)=>(el.id===action.payload)?{...el,isEditable:!el.isEditable } : el)}    
        case "SAVE_MOVIE" :
            return {item : state.item.map((el,index)=>(el.id===action.payload.id)?{...el,lien:action.payload.lien,name:action.payload.name,date:action.payload.date,rating:action.payload.rating,descrp:action.payload.descrp,isEditable:!el.isEditable } : el)}    
        default :
        return state     
    }
}
