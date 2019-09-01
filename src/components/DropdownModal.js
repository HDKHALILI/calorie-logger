import React from "react";

import "../styles/DropdownModal.css";
function DropdownModal(props) {
  const [show, setShow] = React.useState(true);
  const { common, branded } = props;
  const ref = React.useRef();
  useOnClickOutside(ref, event => {
    if (event.target === ref.current) {
    }
    setShow(false);
    props.clearInput("");
  });
  if (!show) {
    return null;
  }
  return (
    <div className="DropdownModal" ref={ref}>
      <div className="dropdown-list">
        <p className="category-title">COMMON</p>
        <div className="common">
          {common.map(food => (
            <div
              key={food.food_name}
              onClick={() => props.selectFood("common", food.food_name)}
              className="food-item"
            >
              <img src={food.photo.thumb} alt={food.food_name} />
              <p className="food-name">{food.food_name}</p>
            </div>
          ))}
        </div>
        <p className="category-title">Branded</p>
        <div className="branded">
          {branded.map(food => (
            <div
              key={food.food_name}
              onClick={() => props.selectFood("branded", food.nix_item_id)}
              className="food-item"
            >
              <img src={food.photo.thumb} alt={food.food_name} />
              <p className="food-name">{food.food_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// for closing modal when clicked outside
function useOnClickOutside(ref, handler) {
  React.useEffect(() => {
    const listener = event => {
      // we will have another pop up so clicking on that
      // shouldn't close the modal
      if (ref.current !== event.target) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default DropdownModal;
