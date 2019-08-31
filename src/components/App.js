import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import FoodList from "./FoodList";
import Summary from "./Summary";
import Profile from "./Profile";
import Search from "./Search";
import "../styles/App.css";
import dietData from "../data/data";

function App() {
  const [foods, setFoods] = React.useState(() => {
    return dietData;
    // return JSON.parse(window.localStorage.getItem("foods") || "[]");
  });
  const [day, setDay] = React.useState(0);

  // React.useEffect(() => {
  //   window.localStorage.setItem("foods", JSON.stringify(foods));
  // }, [foods]);

  // const addFood = food => {
  //   setFoods(foods => [...foods, food]);
  // };
  const addFood = food => {
    const today = dietData;
    today.data_points[0].intake_list = food;
    setFoods(today);
  };

  const prevDay = () => {
    if (day < foods.data_points.length - 1) {
      setDay(day => day + 1);
    }
  };

  const nextDay = () => {
    if (day > 0) {
      setDay(day => day - 1);
    }
  };
  const date =
    foods.data_points[day].date.toLocaleDateString() ===
    new Date().toLocaleDateString()
      ? "Today"
      : foods.data_points[day].date.toLocaleDateString();

  return (
    <div className="App">
      <header className="App-header">
        <Search addFood={addFood} />
        <div className="App-control">
          <i onClick={prevDay} className="fas fa-chevron-left"></i>
          <p className="normal-text">{date}</p>
          <i onClick={nextDay} className="fas fa-chevron-right"></i>
        </div>
      </header>
      <div className="App-content">
        <div className="App-summary">
          <Profile />
          <Summary foods={foods.data_points[day].intake_list} />
        </div>
        <div className="App-foods">
          {foods.data_points[day].intake_list.length > 0 ? (
            <FoodList foods={foods.data_points[day]} />
          ) : (
            <p className="center-text">No food is added for today</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
