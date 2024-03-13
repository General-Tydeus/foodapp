import styles from "./fooditem.module.css";
export default function FoodItem({ food, id }) {
  return (
    <div className={styles.container}>
      <img className={styles.itemImage} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => id(food.id)} className={styles.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
