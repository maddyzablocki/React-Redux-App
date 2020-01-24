const initialState = {
    isLoading: false,
    dogImg: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCHING_FACT_START':
        return{
            ...state,
            isLoading: true
        };
    case 'FETCHING_DATA_SUCCESS':
        return {
            ...state,
            isLoading: false,
            dogImg: action.payload
        }
        default: 
        return state;
    }
}