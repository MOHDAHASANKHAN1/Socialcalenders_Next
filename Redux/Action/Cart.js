
export const Add_To_Cart = (data) => async (dispatch) => {
    dispatch({
        type: "ADD",
        payload: data
    });
}

export const Remove_To_Cart = (data) => async (dispatch) => {
    dispatch({
        type: "REMOVE",
        payload: data
    });
}


export const Addqts = (data) => async (dispatch) => {
    dispatch({
        type: "ADDQTS",
        payload: data
    });
}

export const Removeqts = (data) => async (dispatch) => {
    dispatch({
        type: "REMOVEQTS",
        payload: data
    });
}