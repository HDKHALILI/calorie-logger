import React from "react";

import "../styles/FoodItem.css";

function FoodItem({ food }) {
  return (
    <div className="FoodItem">
      <img src={food.thumb} alt={food.food_name} />
      <div className="FoodItem-texts">
        <div>
          <p className="normal-text">{food.food_name}</p>
          <p className="small-text">
            {food.serving_size} {food.serving_unit} (
            {Math.round(food.current_meal_weight)} g)
          </p>
        </div>
        <div>
          <p className="normal-text">
            {Math.round(food.current_meal_calories)} cal
          </p>
          <p className="small-text">{food.meal_type}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
