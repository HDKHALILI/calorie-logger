import React from "react";
import uuid from "uuid/v4";

import "../styles/Details.css";

function Detail(props) {
  const [servingSize, setServingSize] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [calories, setCalories] = React.useState(0);
  const [mealType, setMealType] = React.useState("breakfast");
  React.useEffect(() => {
    setServingSize(food.serving_qty);
    setWeight(Math.round(food.serving_weight_grams));
    setCalories(Math.round(food.nf_calories));
  }, []);

  const incrementServing = () => {
    setServingSize(servingSize => servingSize + food.serving_qty);
    setCalories(calories => calories + food.nf_calories);
    setWeight(weight => weight + food.serving_weight_grams);
  };

  const decrementServing = () => {
    if (servingSize > 0) {
      setServingSize(servingSize => servingSize - food.serving_qty);
      setCalories(calories => calories - food.nf_calories);
      setWeight(weight => weight - food.serving_weight_grams);
    } else {
      setServingSize(food.serving_qty);
      setCalories(food.nf_calories);
      setWeight(food.serving_weight_grams);
    }
  };

  const handleMealType = event => {
    console.log(event.target.value);
    setMealType(event.target.value);
  };

  const addFood = () => {
    const food = {
      id: uuid(),
      food_name: props.food.food_name,
      serving_size: servingSize,
      current_meal_weight: weight,
      current_meal_calories: calories,
      serving_weight_grams: props.food.serving_weight_grams,
      nf_calories: props.food.nf_calories,
      serving_unit: props.food.serving_unit.split(" ")[0],
      thumb: props.food.photo.thumb,
      meal_type: mealType
    };
    props.addFood(food);
    props.handleShow();
  };

  const { food } = props;
  return (
    <div className="Details">
      <div className="Details-content">
        <div className="Details-info">
          <div>
            <img src={food.photo.thumb} alt={food.food_name} />
            <p>{food.food_name}</p>
          </div>
          <p onClick={props.handleShow} className="close">
            X
          </p>
        </div>
        <div className="Details-serving">
          <div>
            <div className="servings-container">
              <span>Servings</span>
              <div className="servings">
                <span>{servingSize.toFixed(1)}</span>
                <div className="up-down">
                  <i
                    onClick={incrementServing}
                    className="fas fa-chevron-up"
                  ></i>
                  <i
                    onClick={decrementServing}
                    className="fas fa-chevron-down"
                  ></i>
                </div>
              </div>
            </div>
            <p>{food.serving_unit.split(" ")[0]}</p>
          </div>
          <p className="normal-text">
            {Math.round(weight)} <br />
            <span className="small-text">grams</span>
          </p>
          <p className="normal-text">
            {Math.round(calories)} <br />
            <span className="small-text">calories</span>
          </p>
        </div>
        <div className="Details-action">
          <p>ADD TO TODAY</p>
          <select onChange={handleMealType}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          <button onClick={addFood} className="add">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
