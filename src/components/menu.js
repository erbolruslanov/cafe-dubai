import React, { useState, useEffect } from 'react';
import dishes from "../dishes";
import {Link} from "react-router-dom";

const Menu = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        setMeals(dishes)
    }, [])
    return (
       <div className="menu">
           <div className="container">
               <div className="row">
                   {
                       meals.map(meal => (
                           <div className="col-md-4">
                               <div className="card mb-3">
                                   <img src={meal.image} className="card-img-top" alt={meal.title} />
                                   <div className="card-body">
                                       <h5 className="card-title">{meal.title}</h5>
                                       <Link to={`/menu/${meal.id}`} >Read more...</Link>
                                   </div>
                               </div>
                           </div>
                       ))
                   }
               </div>
           </div>
       </div>
    );
};

export default Menu;