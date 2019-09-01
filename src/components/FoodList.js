import React from "react";
import FoodItem from "./FoodItem";
import "../styles/FoodList.css";
import uuid from "uuid/v4";
function FoodList(props) {
  return (
    <div>
      {props.foods.intake_list.map(food => (
        <FoodItem key={food.id || uuid()} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
