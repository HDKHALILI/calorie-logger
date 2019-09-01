import React from "react";
import FoodItem from "./FoodItem";
import "../styles/FoodList.css";
function FoodList(props) {
  return (
    <div>
      {props.foods.map(food => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
