import React, { useState } from "react";

function MyComponent4() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood() {
    // setFoods(foods.filter((_,i)=> i !== index))
    setFoods(foods.filter((_, i) => i !== 0));
  }

  return (
    <>
      <h2>List of Food</h2>
      <ol>
        {foods.map((food, index) => (
          //   <li key={index} onClick={() => handleRemoveFood(index)}>
          <li key={index}>{food}</li>
        ))}
      </ol>
      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <br />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleRemoveFood}>Remove 1st Food</button>
    </>
  );
}

export default MyComponent4;
