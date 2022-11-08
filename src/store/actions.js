const CLICK_LIKE = 'CLICK-LIKE';
const CLOSE_CARD = 'CLOSE-CARD';
const FILTER = 'FILTER';
const DISABLE_FILTER = 'DISABLE_FILTER';

const actionLike = (id) => ({
    type: CLICK_LIKE,
    index: id
});

const actionClose = (id) => ({
    type: CLOSE_CARD,
    index: id
});

const actionFilter = () => ({
    type: FILTER,
    onFilter: true
});

const actionDisableFilter = () => ({
    type: DISABLE_FILTER
})

export const animalFetchData = (url) => {
    return (dispatch) => {
        fetch(url).then(response => {
            if(!response.ok){
                throw new Error(response.statusText) 
            }
            return response
        })
        .then(response =>response.json())
        .then(animals => dispatch(animalFetchDataSucces(animals)))
    }
}

export const animalFetchDataSucces = (animals) => {
    return {
        type:'ANIMALS_FETCH_DATA',
        animals
    }
}

export {actionClose, actionLike, CLOSE_CARD,CLICK_LIKE, actionFilter, FILTER, actionDisableFilter, DISABLE_FILTER };