import React from "react";
import FoodItem from "./FoodItem";
import "../styles/FoodList.css";
function FoodList(props) {
  return (
    <div>
      {props.foods.intake_list.map(food => (
        <FoodItem key={food.food_name} food={food} date={props.foods.date} />
      ))}
    </div>
  );
}

export default FoodList;
