import React from "react";
import { useDispatch } from "react-redux";
import { actionFilter,actionDisableFilter } from "../store/actions";
import { useRef } from "react";



const FilterButton = () => {
    const dispatch = useDispatch();

    const activeFilter = useRef(false);

    const hundleFilter = (evt) => {
        evt.preventDefault();
        activeFilter.current = !activeFilter.current;
        if (activeFilter.current === true) {
            dispatch(actionFilter());
            console.log(activeFilter.current);
        }else{
            dispatch(actionDisableFilter());
        }
    }

    return (
        <div>
            <button onClick={hundleFilter}>Понравилось</button>
        </div>
    )
}

export default FilterButton;

