import React from "react";

import ProgressBar from "./ProgressBar";
import "../styles/Summary.css";

function Summary(props) {
  const consumedCal = props.foods.reduce(
    (total, food) => total + food.current_meal_calories,
    0
  );

  const breakfastCal = props.foods.reduce((total, food) => {
    if (food.meal_type === "breakfast") {
      return total + food.current_meal_calories;
    } else {
      return total;
    }
  }, 0);

  const lunchCal = props.foods.reduce((total, food) => {
    if (food.meal_type === "lunch") {
      return total + food.current_meal_calories;
    } else {
      return total;
    }
  }, 0);

  const dinnerCal = props.foods.reduce((total, food) => {
    if (food.meal_type === "dinner") {
      return total + food.current_meal_calories;
    } else {
      return total;
    }
  }, 0);

  const snackCal = props.foods.reduce((total, food) => {
    if (food.meal_type === "snack") {
      return total + food.current_meal_calories;
    } else {
      return total;
    }
  }, 0);

  const progress = Math.round((consumedCal / 1500) * 100);
  return (
    <div className="Summary">
      <div className="Summary-details">
        <div>
          <p className="normal-text">{Math.round(consumedCal)} cal</p>
          <p className="small-text">consumed</p>
        </div>
        <div>
          <p className="normal-text">1500 cal</p>
          <p className="small-text">daily goal</p>
        </div>
      </div>
      <ProgressBar progress={progress} />
      <div className="meal-calories">
        <div>
          <span className="normal-text">{Math.round(breakfastCal)}</span>
          <span className="small-text">Breakfast</span>
        </div>
        <div>
          <span className="normal-text">{Math.round(lunchCal)}</span>
          <span className="small-text">Lunch</span>
        </div>
        <div>
          <span className="normal-text">{Math.round(dinnerCal)}</span>
          <span className="small-text">Dinner</span>
        </div>
        <div>
          <span className="normal-text">{Math.round(snackCal)}</span>
          <span className="small-text">Snack</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
