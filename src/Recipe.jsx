import React from 'react';

const Recipe = ({name, type, image, ingredients}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{type}</p>
            <img src={image} alt="" />
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul> 
        </div>
    )
}

export default Recipe