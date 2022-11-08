import React from "react";
import { actionClose, actionLike } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { animalFetchData } from "../store/actions";
import { useEffect } from "react";


const Cards = () => {

    useEffect(()=> dispatch(animalFetchData('https://zoo-animal-api.herokuapp.com/animals/rand/8')),[false])

    let stateCard = useSelector((state)=>state);
    const dispatch = useDispatch();
    
    const handleLike = (evt) => {
       dispatch(actionLike(evt.target.id));
    };

    const handleClose = (evt) => {
        dispatch(actionClose(evt.target.id));
    };

    const cards = stateCard.map((elem) => {
        return (
        <div key={elem.id} style={{display: elem.style}} className='card'> 
            <i class="fa fa-times" aria-hidden="true" onClick={handleClose} id={elem.id}></i>
            <img alt='Картинка карточки' src={elem.image_link}/>
            <div className="text-card">
            <h3>{elem.name}</h3>
            <p>{elem.geo_range}</p>
            <i class="fa fa-heart-o fa-lg" aria-hidden="true" onClick={handleLike} id={elem.id} style={{color: elem.liked ? 'red' : 'grey'}}></i>
            </div>
        </div> )
    })

    return (
        <div className="cards-block">
            {cards}
        </div>
    )
};

export default Cards;