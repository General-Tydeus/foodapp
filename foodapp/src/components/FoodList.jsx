import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setfoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} id={setfoodID} />
      ))}
    </div>
  );
}
