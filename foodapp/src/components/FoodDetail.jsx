import { useState } from "react";
import { useEffect } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodID }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "842496cd68cf400484283391b8bf843f";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodID]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong> ⏱ {food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong> 🍽 {food.servings} Servings</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? " 🍅 Vegetarian " : " 🍖 Non-vegetarian "}
          </strong>
        </span>
        <span>
          <strong>{food.vegan ? " 🥕 Vegan " : ""}</strong>
        </span>
      </div>
      <div>
        <span>
          <strong>$ {food.pricePerServing / 100} Per serving</strong>
        </span>
      </div>
      <h2>Ingredients</h2>
      {loading ? <p>Loading...</p> : <ItemList food={food} />}

      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {loading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
