import axios from 'axios';

export const fetchCatFact = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_FACT_START' });
        axios
        .get('https://random.dog/woof.json')
        .then(res => {
            dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err));
    };
};