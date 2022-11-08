import { CLICK_LIKE,CLOSE_CARD,FILTER,DISABLE_FILTER } from "./actions";

let animalReducer = (state = [], action) => {
    switch(action.type) {
        case CLICK_LIKE: {
            let stateCopy = Array.from(state)
            
            const index = stateCopy.findIndex((elem) => elem.id == action.index);

            stateCopy[index].liked ? stateCopy[index].liked = false : stateCopy[index].liked = true

            if (stateCopy[index].onFilter === true && stateCopy[index].liked === false ){
                stateCopy[index].style = 'none';
            }
            return stateCopy;
        }

        case CLOSE_CARD: return state.filter((elem) => elem.id != action.index);

        case FILTER: {
            let stateCopy = Array.from(state)
            stateCopy.map((elem)=> {elem.liked ? elem.onFilter = action.onFilter : elem.onFilter = !action.onFilter});

            stateCopy.map((elem)=>{elem.liked ? elem.style = 'block' : elem.style = 'none'});
            return stateCopy;
        }

        case DISABLE_FILTER: {
            let stateCopy = Array.from(state)
            stateCopy.map((elem)=>{elem.style = 'block';elem.onFilter = false});
            return stateCopy;
        }

        case 'ANIMALS_FETCH_DATA': return action.animals;

        default: return state;
    }
}


export default animalReducer