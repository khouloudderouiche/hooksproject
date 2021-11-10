import React from 'react'
import StarRatingcomponent from "react-rating-stars-component";
import { useState } from 'react/cjs/react.development'

const Filter = ({searchName,setRating}) => {
    console.log(searchName)
const[ text,setText]=useState("")
const handleSubmit=(e)=>{
    e.preventDefault()
    searchName(text)
}
    return (
        <div >
            < form onSubmit={handleSubmit}>
            <input type='text' name='' value={text} placeholder="filter name" onchange={(e)=>setText(e.target.value) }/>
            <buttom> Search </buttom>
           </form>
           <StarRatingcomponent editing={true} namr={'rate'} onStarClick={(nextValue,pervValue, name) =>setRating(nextValue)}      />
                  
        </div>
    )
}

export default Filter
