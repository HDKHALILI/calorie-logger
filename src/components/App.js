import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import FoodList from "./FoodList";
import Summary from "./Summary";
import Profile from "./Profile";
import Search from "./Search";
import "../styles/App.css";
import dietData from "../data/data";

class App extends React.Component {
  state = {
    foods: dietData,
    day: 0
  };

  addFood = newFood => {
    const updatedFood = (this.state.foods.data_points[0].intake_list = [
      ...this.state.foods.data_points[0].intake_list,
      newFood
    ]);
    this.setState(updatedFood);
  };

  prevDay = () => {
    const { foods, day } = this.state;
    if (day < foods.data_points.length - 1) {
      this.setState(({ day }) => ({ day: day + 1 }));
    }
  };

  nextDay = () => {
    if (this.state.day > 0) {
      this.setState(({ day }) => ({ day: day - 1 }));
    }
  };

  render() {
    const { foods, day } = this.state;
    const date =
      foods.data_points[day].date.toLocaleDateString() ===
      new Date().toLocaleDateString()
        ? "Today"
        : foods.data_points[day].date.toLocaleDateString();

    return (
      <div className="App">
        <header className="App-header">
          <Search addFood={this.addFood} />
          <div className="App-control">
            <i onClick={this.prevDay} className="fas fa-chevron-left"></i>
            <p className="normal-text">{date}</p>
            <i onClick={this.nextDay} className="fas fa-chevron-right"></i>
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
}

export default App;
