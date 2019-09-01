import React from "react";
import axios from "axios";

import DropdownModal from "./DropdownModal";
import Details from "./Details";
import "../styles/Search.css";

// const APP_ID = process.env.REACT_APP_ID;
// const APP_KEY = process.env.REACT_APP_KEY;
const APP_ID = "f035d378";
const APP_KEY = "f55e2f292161d46d84471ed3f1dc92bb";
const foodUrl = "https://trackapi.nutritionix.com/v2/search/instant?query=";
const nutrientUrl = "https://trackapi.nutritionix.com/v2/natural/nutrients";
const itemSearchUrl = "https://trackapi.nutritionix.com/v2/search/item";
function Search(props) {
  const [input, setInput] = React.useState("");
  // api response that matches "input" - response from foodUrl
  const [data, setData] = React.useState(null);
  // one food item, response from nutrientUrl or itemSearchUrl
  // used to populate popup
  const [food, setFood] = React.useState(null);
  // use to call the api to get detail of that common food
  const [commonFood, setCommonFood] = React.useState("");
  // use to call api to get detail of branded food
  const [brandedFood, setBrandedFood] = React.useState("");
  // to show the popup
  const [showDetail, setShowDetail] = React.useState(false);
  const handleChange = event => {
    setInput(event.target.value);
  };

  const clearInput = input => {
    setInput(input);
  };
  const selectFood = (type, query) => {
    if (type === "common") {
      setCommonFood(query);
    } else if (type === "branded") {
      setBrandedFood(query);
    }
  };

  const handleDetail = () => {
    setShowDetail(false);
  };

  React.useEffect(() => {
    axios
      .get(`${itemSearchUrl}?nix_item_id=${brandedFood}`, {
        headers: {
          "x-app-id": APP_ID,
          "x-app-key": APP_KEY
        }
      })
      .then(({ data }) => {
        setFood(data.foods);
        setShowDetail(true);
      });
  }, [brandedFood]);

  React.useEffect(() => {
    axios
      .get(`${foodUrl}${input}`, {
        headers: {
          "x-app-id": APP_ID,
          "x-app-key": APP_KEY
        }
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => console.log(error.message));
  }, [input]);

  React.useEffect(() => {
    axios({
      method: "post",
      url: nutrientUrl,
      headers: {
        "Content-Type": "application/json",
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY
      },
      data: {
        query: commonFood
      }
    })
      .then(({ data }) => {
        setFood(data.foods);
        setShowDetail(true);
      })
      .catch(error => console.log(error.message));
  }, [commonFood]);
  return (
    <div className="Search">
      <div className="Search-input">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search foods..."
          value={input}
          onChange={handleChange}
        />
      </div>
      {data !== null && input !== "" && (
        <DropdownModal
          common={data.common}
          branded={data.branded}
          selectFood={selectFood}
          clearInput={clearInput}
          handleDetail={handleDetail}
          showDetail={showDetail}
          addFood={props.addFood}
        />
      )}
      {showDetail ? (
        <Details
          food={food[0]}
          addFood={props.addFood}
          handleShow={handleDetail}
        />
      ) : null}
    </div>
  );
}

export default Search;
