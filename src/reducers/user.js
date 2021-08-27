const initialState = {
    id: 1,
    name: 'kemal',
    surName: 'bekcan',
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "USER_NAME_REQUEST":
            return {
                ...state,
                name: 'kemal'
            }
        default : return state
    }
}

export default userReducer