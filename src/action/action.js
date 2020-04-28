export const addMovie = (payload) => {
    return {
        type : "Add_MOVIE",
        payload
    }
}

export const deleteMovie = (payload) => {
    return {
        type : "DELETE_MOVIE",
        payload
    }
}



export const editMovie = (payload) => {
    return {
        type : "EDIT_MOVIE",
        payload
    }
}

export const saveMovie = (payload) => {
    return {
        type : "SAVE_MOVIE",
        payload
    }
}


export const searchMovie = (payload) => {
    return {
        type : "SEARCH_MOVIE",
        payload
    }
}


export const searchRating = (payload) => {
    return {
        type : "SEARCH_RATING",
        payload
    }
}
